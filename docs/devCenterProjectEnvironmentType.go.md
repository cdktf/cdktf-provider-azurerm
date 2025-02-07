# `devCenterProjectEnvironmentType` Submodule <a name="`devCenterProjectEnvironmentType` Submodule" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterProjectEnvironmentType <a name="DevCenterProjectEnvironmentType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type azurerm_dev_center_project_environment_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.NewDevCenterProjectEnvironmentType(scope Construct, id *string, config DevCenterProjectEnvironmentTypeConfig) DevCenterProjectEnvironmentType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig">DevCenterProjectEnvironmentTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig">DevCenterProjectEnvironmentTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment">PutUserRoleAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetCreatorRoleAssignmentRoles">ResetCreatorRoleAssignmentRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetUserRoleAssignment">ResetUserRoleAssignment</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity"></a>

```go
func PutIdentity(value DevCenterProjectEnvironmentTypeIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts"></a>

```go
func PutTimeouts(value DevCenterProjectEnvironmentTypeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

---

##### `PutUserRoleAssignment` <a name="PutUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment"></a>

```go
func PutUserRoleAssignment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.putUserRoleAssignment.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreatorRoleAssignmentRoles` <a name="ResetCreatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetCreatorRoleAssignmentRoles"></a>

```go
func ResetCreatorRoleAssignmentRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserRoleAssignment` <a name="ResetUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.resetUserRoleAssignment"></a>

```go
func ResetUserRoleAssignment()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.DevCenterProjectEnvironmentType_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.DevCenterProjectEnvironmentType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.DevCenterProjectEnvironmentType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.DevCenterProjectEnvironmentType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevCenterProjectEnvironmentType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevCenterProjectEnvironmentType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevCenterProjectEnvironmentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterProjectEnvironmentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference">DevCenterProjectEnvironmentTypeIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference">DevCenterProjectEnvironmentTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignment">UserRoleAssignment</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList">DevCenterProjectEnvironmentTypeUserRoleAssignmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRolesInput">CreatorRoleAssignmentRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetIdInput">DeploymentTargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectIdInput">DevCenterProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignmentInput">UserRoleAssignmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles">CreatorRoleAssignmentRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetId">DeploymentTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identity"></a>

```go
func Identity() DevCenterProjectEnvironmentTypeIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference">DevCenterProjectEnvironmentTypeIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeouts"></a>

```go
func Timeouts() DevCenterProjectEnvironmentTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference">DevCenterProjectEnvironmentTypeTimeoutsOutputReference</a>

---

##### `UserRoleAssignment`<sup>Required</sup> <a name="UserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignment"></a>

```go
func UserRoleAssignment() DevCenterProjectEnvironmentTypeUserRoleAssignmentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList">DevCenterProjectEnvironmentTypeUserRoleAssignmentList</a>

---

##### `CreatorRoleAssignmentRolesInput`<sup>Optional</sup> <a name="CreatorRoleAssignmentRolesInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRolesInput"></a>

```go
func CreatorRoleAssignmentRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentTargetIdInput`<sup>Optional</sup> <a name="DeploymentTargetIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetIdInput"></a>

```go
func DeploymentTargetIdInput() *string
```

- *Type:* *string

---

##### `DevCenterProjectIdInput`<sup>Optional</sup> <a name="DevCenterProjectIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectIdInput"></a>

```go
func DevCenterProjectIdInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.identityInput"></a>

```go
func IdentityInput() DevCenterProjectEnvironmentTypeIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserRoleAssignmentInput`<sup>Optional</sup> <a name="UserRoleAssignmentInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.userRoleAssignmentInput"></a>

```go
func UserRoleAssignmentInput() interface{}
```

- *Type:* interface{}

---

##### `CreatorRoleAssignmentRoles`<sup>Required</sup> <a name="CreatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles"></a>

```go
func CreatorRoleAssignmentRoles() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentTargetId`<sup>Required</sup> <a name="DeploymentTargetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.deploymentTargetId"></a>

```go
func DeploymentTargetId() *string
```

- *Type:* *string

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.devCenterProjectId"></a>

```go
func DevCenterProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterProjectEnvironmentTypeConfig <a name="DevCenterProjectEnvironmentTypeConfig" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

&devcenterprojectenvironmenttype.DevCenterProjectEnvironmentTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeploymentTargetId: *string,
	DevCenterProjectId: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity,
	Location: *string,
	Name: *string,
	CreatorRoleAssignmentRoles: *[]*string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts,
	UserRoleAssignment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.deploymentTargetId">DeploymentTargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.creatorRoleAssignmentRoles">CreatorRoleAssignmentRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.userRoleAssignment">UserRoleAssignment</a></code> | <code>interface{}</code> | user_role_assignment block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentTargetId`<sup>Required</sup> <a name="DeploymentTargetId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.deploymentTargetId"></a>

```go
DeploymentTargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#deployment_target_id DevCenterProjectEnvironmentType#deployment_target_id}.

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId"></a>

```go
DevCenterProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#dev_center_project_id DevCenterProjectEnvironmentType#dev_center_project_id}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.identity"></a>

```go
Identity DevCenterProjectEnvironmentTypeIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#identity DevCenterProjectEnvironmentType#identity}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#location DevCenterProjectEnvironmentType#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#name DevCenterProjectEnvironmentType#name}.

---

##### `CreatorRoleAssignmentRoles`<sup>Optional</sup> <a name="CreatorRoleAssignmentRoles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.creatorRoleAssignmentRoles"></a>

```go
CreatorRoleAssignmentRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#creator_role_assignment_roles DevCenterProjectEnvironmentType#creator_role_assignment_roles}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#id DevCenterProjectEnvironmentType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#tags DevCenterProjectEnvironmentType#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.timeouts"></a>

```go
Timeouts DevCenterProjectEnvironmentTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts">DevCenterProjectEnvironmentTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#timeouts DevCenterProjectEnvironmentType#timeouts}

---

##### `UserRoleAssignment`<sup>Optional</sup> <a name="UserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeConfig.property.userRoleAssignment"></a>

```go
UserRoleAssignment interface{}
```

- *Type:* interface{}

user_role_assignment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#user_role_assignment DevCenterProjectEnvironmentType#user_role_assignment}

---

### DevCenterProjectEnvironmentTypeIdentity <a name="DevCenterProjectEnvironmentTypeIdentity" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

&devcenterprojectenvironmenttype.DevCenterProjectEnvironmentTypeIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#type DevCenterProjectEnvironmentType#type}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#identity_ids DevCenterProjectEnvironmentType#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#type DevCenterProjectEnvironmentType#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#identity_ids DevCenterProjectEnvironmentType#identity_ids}.

---

### DevCenterProjectEnvironmentTypeTimeouts <a name="DevCenterProjectEnvironmentTypeTimeouts" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

&devcenterprojectenvironmenttype.DevCenterProjectEnvironmentTypeTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#create DevCenterProjectEnvironmentType#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#delete DevCenterProjectEnvironmentType#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#read DevCenterProjectEnvironmentType#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#update DevCenterProjectEnvironmentType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#create DevCenterProjectEnvironmentType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#delete DevCenterProjectEnvironmentType#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#read DevCenterProjectEnvironmentType#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#update DevCenterProjectEnvironmentType#update}.

---

### DevCenterProjectEnvironmentTypeUserRoleAssignment <a name="DevCenterProjectEnvironmentTypeUserRoleAssignment" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

&devcenterprojectenvironmenttype.DevCenterProjectEnvironmentTypeUserRoleAssignment {
	Roles: *[]*string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.roles">Roles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#roles DevCenterProjectEnvironmentType#roles}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#user_id DevCenterProjectEnvironmentType#user_id}. |

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#roles DevCenterProjectEnvironmentType#roles}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignment.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/dev_center_project_environment_type#user_id DevCenterProjectEnvironmentType#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterProjectEnvironmentTypeIdentityOutputReference <a name="DevCenterProjectEnvironmentTypeIdentityOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.NewDevCenterProjectEnvironmentTypeIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevCenterProjectEnvironmentTypeIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DevCenterProjectEnvironmentTypeIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeIdentity">DevCenterProjectEnvironmentTypeIdentity</a>

---


### DevCenterProjectEnvironmentTypeTimeoutsOutputReference <a name="DevCenterProjectEnvironmentTypeTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.NewDevCenterProjectEnvironmentTypeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevCenterProjectEnvironmentTypeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevCenterProjectEnvironmentTypeUserRoleAssignmentList <a name="DevCenterProjectEnvironmentTypeUserRoleAssignmentList" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.NewDevCenterProjectEnvironmentTypeUserRoleAssignmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevCenterProjectEnvironmentTypeUserRoleAssignmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get"></a>

```go
func Get(index *f64) DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference <a name="DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/devcenterprojectenvironmenttype"

devcenterprojectenvironmenttype.NewDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.devCenterProjectEnvironmentType.DevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



