// This file is part of alms - http://alms.org/
//
// alms is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// alms is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with alms.  If not, see <http://www.gnu.org/licenses/>.

H5P.findInstanceFromId = function (contentId) {
    if (!contentId) {
        return H5P.instances[0];
    }
    if (H5P.instances !== undefined) {
        for (var i = 0; i < H5P.instances.length; i++) {
            if (H5P.instances[i].contentId === contentId) {
                return H5P.instances[i];
            }
        }
    }
    return undefined;
};
H5P.getXAPIStatements = function (contentId, statement) {
    var statements = [];
    var instance = H5P.findInstanceFromId(contentId);
    if (!instance){
        return statements;
    }
    if (instance.getXAPIData == undefined) {
        var xAPIData = {
            statement: statement
        };
    } else {
        var xAPIData = instance.getXAPIData();
    }
    if (xAPIData.statement != undefined) {
        statements.push(xAPIData.statement);
    }
    if (xAPIData.children != undefined) {
        statements = statements.concat(xAPIData.children.map(a => a.statement));
    }
    return statements;
};
H5P.getalmsComponent = function () {
    if (H5PIntegration.almsComponent) {
        return H5PIntegration.almsComponent;
    }
    return undefined;
};