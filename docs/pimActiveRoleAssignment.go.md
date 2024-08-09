# `pimActiveRoleAssignment` Submodule <a name="`pimActiveRoleAssignment` Submodule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PimActiveRoleAssignment <a name="PimActiveRoleAssignment" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment azurerm_pim_active_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.NewPimActiveRoleAssignment(scope Construct, id *string, config PimActiveRoleAssignmentConfig) PimActiveRoleAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig">PimActiveRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig">PimActiveRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket">PutTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetJustification">ResetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTicket">ResetTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule"></a>

```go
func PutSchedule(value PimActiveRoleAssignmentSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---

##### `PutTicket` <a name="PutTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket"></a>

```go
func PutTicket(value PimActiveRoleAssignmentTicket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts"></a>

```go
func PutTimeouts(value PimActiveRoleAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetJustification` <a name="ResetJustification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetJustification"></a>

```go
func ResetJustification()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTicket` <a name="ResetTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTicket"></a>

```go
func ResetTicket()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.PimActiveRoleAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.PimActiveRoleAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.PimActiveRoleAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.PimActiveRoleAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PimActiveRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PimActiveRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PimActiveRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference">PimActiveRoleAssignmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticket">Ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference">PimActiveRoleAssignmentTicketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference">PimActiveRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justificationInput">JustificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticketInput">TicketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.schedule"></a>

```go
func Schedule() PimActiveRoleAssignmentScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference">PimActiveRoleAssignmentScheduleOutputReference</a>

---

##### `Ticket`<sup>Required</sup> <a name="Ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticket"></a>

```go
func Ticket() PimActiveRoleAssignmentTicketOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference">PimActiveRoleAssignmentTicketOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeouts"></a>

```go
func Timeouts() PimActiveRoleAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference">PimActiveRoleAssignmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JustificationInput`<sup>Optional</sup> <a name="JustificationInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justificationInput"></a>

```go
func JustificationInput() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionIdInput"></a>

```go
func RoleDefinitionIdInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scheduleInput"></a>

```go
func ScheduleInput() PimActiveRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TicketInput`<sup>Optional</sup> <a name="TicketInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticketInput"></a>

```go
func TicketInput() PimActiveRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionId"></a>

```go
func RoleDefinitionId() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PimActiveRoleAssignmentConfig <a name="PimActiveRoleAssignmentConfig" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

&pimactiveroleassignment.PimActiveRoleAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrincipalId: *string,
	RoleDefinitionId: *string,
	Scope: *string,
	Id: *string,
	Justification: *string,
	Schedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule,
	Ticket: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.principalId">PrincipalId</a></code> | <code>*string</code> | Object ID of the principal for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | Role definition ID for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.scope">Scope</a></code> | <code>*string</code> | Scope for this role assignment, should be a valid resource ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.justification">Justification</a></code> | <code>*string</code> | The justification for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.ticket">Ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

Object ID of the principal for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#principal_id PimActiveRoleAssignment#principal_id}

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.roleDefinitionId"></a>

```go
RoleDefinitionId *string
```

- *Type:* *string

Role definition ID for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#role_definition_id PimActiveRoleAssignment#role_definition_id}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Scope for this role assignment, should be a valid resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#scope PimActiveRoleAssignment#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Justification`<sup>Optional</sup> <a name="Justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.justification"></a>

```go
Justification *string
```

- *Type:* *string

The justification for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#justification PimActiveRoleAssignment#justification}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.schedule"></a>

```go
Schedule PimActiveRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#schedule PimActiveRoleAssignment#schedule}

---

##### `Ticket`<sup>Optional</sup> <a name="Ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.ticket"></a>

```go
Ticket PimActiveRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#ticket PimActiveRoleAssignment#ticket}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.timeouts"></a>

```go
Timeouts PimActiveRoleAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#timeouts PimActiveRoleAssignment#timeouts}

---

### PimActiveRoleAssignmentSchedule <a name="PimActiveRoleAssignmentSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

&pimactiveroleassignment.PimActiveRoleAssignmentSchedule {
	Expiration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration,
	StartDateTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.startDateTime">StartDateTime</a></code> | <code>*string</code> | The start date/time of the role assignment. |

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.expiration"></a>

```go
Expiration PimActiveRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#expiration PimActiveRoleAssignment#expiration}

---

##### `StartDateTime`<sup>Optional</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.startDateTime"></a>

```go
StartDateTime *string
```

- *Type:* *string

The start date/time of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#start_date_time PimActiveRoleAssignment#start_date_time}

---

### PimActiveRoleAssignmentScheduleExpiration <a name="PimActiveRoleAssignmentScheduleExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

&pimactiveroleassignment.PimActiveRoleAssignmentScheduleExpiration {
	DurationDays: *f64,
	DurationHours: *f64,
	EndDateTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationDays">DurationDays</a></code> | <code>*f64</code> | The duration of the role assignment in days. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationHours">DurationHours</a></code> | <code>*f64</code> | The duration of the role assignment in hours. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.endDateTime">EndDateTime</a></code> | <code>*string</code> | The end date/time of the role assignment. |

---

##### `DurationDays`<sup>Optional</sup> <a name="DurationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationDays"></a>

```go
DurationDays *f64
```

- *Type:* *f64

The duration of the role assignment in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#duration_days PimActiveRoleAssignment#duration_days}

---

##### `DurationHours`<sup>Optional</sup> <a name="DurationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationHours"></a>

```go
DurationHours *f64
```

- *Type:* *f64

The duration of the role assignment in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#duration_hours PimActiveRoleAssignment#duration_hours}

---

##### `EndDateTime`<sup>Optional</sup> <a name="EndDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.endDateTime"></a>

```go
EndDateTime *string
```

- *Type:* *string

The end date/time of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#end_date_time PimActiveRoleAssignment#end_date_time}

---

### PimActiveRoleAssignmentTicket <a name="PimActiveRoleAssignmentTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

&pimactiveroleassignment.PimActiveRoleAssignmentTicket {
	Number: *string,
	SystemAttribute: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.number">Number</a></code> | <code>*string</code> | User-supplied ticket number to be included with the request. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.systemAttribute">SystemAttribute</a></code> | <code>*string</code> | User-supplied ticket system name to be included with the request. |

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.number"></a>

```go
Number *string
```

- *Type:* *string

User-supplied ticket number to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#number PimActiveRoleAssignment#number}

---

##### `SystemAttribute`<sup>Optional</sup> <a name="SystemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.systemAttribute"></a>

```go
SystemAttribute *string
```

- *Type:* *string

User-supplied ticket system name to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#system PimActiveRoleAssignment#system}

---

### PimActiveRoleAssignmentTimeouts <a name="PimActiveRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

&pimactiveroleassignment.PimActiveRoleAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PimActiveRoleAssignmentScheduleExpirationOutputReference <a name="PimActiveRoleAssignmentScheduleExpirationOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.NewPimActiveRoleAssignmentScheduleExpirationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PimActiveRoleAssignmentScheduleExpirationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationDays">ResetDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationHours">ResetDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime">ResetEndDateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationDays` <a name="ResetDurationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationDays"></a>

```go
func ResetDurationDays()
```

##### `ResetDurationHours` <a name="ResetDurationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationHours"></a>

```go
func ResetDurationHours()
```

##### `ResetEndDateTime` <a name="ResetEndDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime"></a>

```go
func ResetEndDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput">DurationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput">DurationHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput">EndDateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDays">DurationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHours">DurationHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTime">EndDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationDaysInput`<sup>Optional</sup> <a name="DurationDaysInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput"></a>

```go
func DurationDaysInput() *f64
```

- *Type:* *f64

---

##### `DurationHoursInput`<sup>Optional</sup> <a name="DurationHoursInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput"></a>

```go
func DurationHoursInput() *f64
```

- *Type:* *f64

---

##### `EndDateTimeInput`<sup>Optional</sup> <a name="EndDateTimeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput"></a>

```go
func EndDateTimeInput() *string
```

- *Type:* *string

---

##### `DurationDays`<sup>Required</sup> <a name="DurationDays" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDays"></a>

```go
func DurationDays() *f64
```

- *Type:* *f64

---

##### `DurationHours`<sup>Required</sup> <a name="DurationHours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHours"></a>

```go
func DurationHours() *f64
```

- *Type:* *f64

---

##### `EndDateTime`<sup>Required</sup> <a name="EndDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTime"></a>

```go
func EndDateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.internalValue"></a>

```go
func InternalValue() PimActiveRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---


### PimActiveRoleAssignmentScheduleOutputReference <a name="PimActiveRoleAssignmentScheduleOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.NewPimActiveRoleAssignmentScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PimActiveRoleAssignmentScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetStartDateTime">ResetStartDateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiration` <a name="PutExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration"></a>

```go
func PutExpiration(value PimActiveRoleAssignmentScheduleExpiration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetStartDateTime` <a name="ResetStartDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetStartDateTime"></a>

```go
func ResetStartDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference">PimActiveRoleAssignmentScheduleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expirationInput">ExpirationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTimeInput">StartDateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTime">StartDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expiration"></a>

```go
func Expiration() PimActiveRoleAssignmentScheduleExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference">PimActiveRoleAssignmentScheduleExpirationOutputReference</a>

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expirationInput"></a>

```go
func ExpirationInput() PimActiveRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---

##### `StartDateTimeInput`<sup>Optional</sup> <a name="StartDateTimeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTimeInput"></a>

```go
func StartDateTimeInput() *string
```

- *Type:* *string

---

##### `StartDateTime`<sup>Required</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTime"></a>

```go
func StartDateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() PimActiveRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---


### PimActiveRoleAssignmentTicketOutputReference <a name="PimActiveRoleAssignmentTicketOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.NewPimActiveRoleAssignmentTicketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PimActiveRoleAssignmentTicketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetSystemAttribute">ResetSystemAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetNumber"></a>

```go
func ResetNumber()
```

##### `ResetSystemAttribute` <a name="ResetSystemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetSystemAttribute"></a>

```go
func ResetSystemAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.numberInput">NumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttributeInput">SystemAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.number">Number</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.numberInput"></a>

```go
func NumberInput() *string
```

- *Type:* *string

---

##### `SystemAttributeInput`<sup>Optional</sup> <a name="SystemAttributeInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttributeInput"></a>

```go
func SystemAttributeInput() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.number"></a>

```go
func Number() *string
```

- *Type:* *string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttribute"></a>

```go
func SystemAttribute() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.internalValue"></a>

```go
func InternalValue() PimActiveRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---


### PimActiveRoleAssignmentTimeoutsOutputReference <a name="PimActiveRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/pimactiveroleassignment"

pimactiveroleassignment.NewPimActiveRoleAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PimActiveRoleAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



