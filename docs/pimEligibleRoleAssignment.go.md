# `pimEligibleRoleAssignment` Submodule <a name="`pimEligibleRoleAssignment` Submodule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PimEligibleRoleAssignment <a name="PimEligibleRoleAssignment" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment azurerm_pim_eligible_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.NewPimEligibleRoleAssignment(scope Construct, id *string, config PimEligibleRoleAssignmentConfig) PimEligibleRoleAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig">PimEligibleRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig">PimEligibleRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket">PutTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetJustification">ResetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTicket">ResetTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule"></a>

```go
func PutSchedule(value PimEligibleRoleAssignmentSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---

##### `PutTicket` <a name="PutTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket"></a>

```go
func PutTicket(value PimEligibleRoleAssignmentTicket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTicket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts"></a>

```go
func PutTimeouts(value PimEligibleRoleAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetJustification` <a name="ResetJustification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetJustification"></a>

```go
func ResetJustification()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTicket` <a name="ResetTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTicket"></a>

```go
func ResetTicket()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PimEligibleRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.PimEligibleRoleAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.PimEligibleRoleAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.PimEligibleRoleAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.PimEligibleRoleAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PimEligibleRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PimEligibleRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PimEligibleRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PimEligibleRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference">PimEligibleRoleAssignmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticket">Ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference">PimEligibleRoleAssignmentTicketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference">PimEligibleRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justificationInput">JustificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalIdInput">PrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticketInput">TicketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.schedule"></a>

```go
func Schedule() PimEligibleRoleAssignmentScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference">PimEligibleRoleAssignmentScheduleOutputReference</a>

---

##### `Ticket`<sup>Required</sup> <a name="Ticket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticket"></a>

```go
func Ticket() PimEligibleRoleAssignmentTicketOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference">PimEligibleRoleAssignmentTicketOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeouts"></a>

```go
func Timeouts() PimEligibleRoleAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference">PimEligibleRoleAssignmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JustificationInput`<sup>Optional</sup> <a name="JustificationInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justificationInput"></a>

```go
func JustificationInput() *string
```

- *Type:* *string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalIdInput"></a>

```go
func PrincipalIdInput() *string
```

- *Type:* *string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionIdInput"></a>

```go
func RoleDefinitionIdInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scheduleInput"></a>

```go
func ScheduleInput() PimEligibleRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TicketInput`<sup>Optional</sup> <a name="TicketInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.ticketInput"></a>

```go
func TicketInput() PimEligibleRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.roleDefinitionId"></a>

```go
func RoleDefinitionId() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PimEligibleRoleAssignmentConfig <a name="PimEligibleRoleAssignmentConfig" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

&pimeligibleroleassignment.PimEligibleRoleAssignmentConfig {
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
	Schedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule,
	Ticket: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.principalId">PrincipalId</a></code> | <code>*string</code> | The principal id. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | The role definition id. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.scope">Scope</a></code> | <code>*string</code> | The scope. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#id PimEligibleRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.justification">Justification</a></code> | <code>*string</code> | The justification of the eligible role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.ticket">Ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.principalId"></a>

```go
PrincipalId *string
```

- *Type:* *string

The principal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#principal_id PimEligibleRoleAssignment#principal_id}

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.roleDefinitionId"></a>

```go
RoleDefinitionId *string
```

- *Type:* *string

The role definition id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#role_definition_id PimEligibleRoleAssignment#role_definition_id}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#scope PimEligibleRoleAssignment#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#id PimEligibleRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Justification`<sup>Optional</sup> <a name="Justification" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.justification"></a>

```go
Justification *string
```

- *Type:* *string

The justification of the eligible role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#justification PimEligibleRoleAssignment#justification}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.schedule"></a>

```go
Schedule PimEligibleRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#schedule PimEligibleRoleAssignment#schedule}

---

##### `Ticket`<sup>Optional</sup> <a name="Ticket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.ticket"></a>

```go
Ticket PimEligibleRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#ticket PimEligibleRoleAssignment#ticket}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentConfig.property.timeouts"></a>

```go
Timeouts PimEligibleRoleAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts">PimEligibleRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#timeouts PimEligibleRoleAssignment#timeouts}

---

### PimEligibleRoleAssignmentSchedule <a name="PimEligibleRoleAssignmentSchedule" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

&pimeligibleroleassignment.PimEligibleRoleAssignmentSchedule {
	Expiration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration,
	StartDateTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.startDateTime">StartDateTime</a></code> | <code>*string</code> | The start date time. |

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.expiration"></a>

```go
Expiration PimEligibleRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#expiration PimEligibleRoleAssignment#expiration}

---

##### `StartDateTime`<sup>Optional</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule.property.startDateTime"></a>

```go
StartDateTime *string
```

- *Type:* *string

The start date time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#start_date_time PimEligibleRoleAssignment#start_date_time}

---

### PimEligibleRoleAssignmentScheduleExpiration <a name="PimEligibleRoleAssignmentScheduleExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

&pimeligibleroleassignment.PimEligibleRoleAssignmentScheduleExpiration {
	DurationDays: *f64,
	DurationHours: *f64,
	EndDateTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationDays">DurationDays</a></code> | <code>*f64</code> | The duration of the assignment in days. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationHours">DurationHours</a></code> | <code>*f64</code> | The duration of the assignment in hours. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.endDateTime">EndDateTime</a></code> | <code>*string</code> | The end date time of the assignment. |

---

##### `DurationDays`<sup>Optional</sup> <a name="DurationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationDays"></a>

```go
DurationDays *f64
```

- *Type:* *f64

The duration of the assignment in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#duration_days PimEligibleRoleAssignment#duration_days}

---

##### `DurationHours`<sup>Optional</sup> <a name="DurationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.durationHours"></a>

```go
DurationHours *f64
```

- *Type:* *f64

The duration of the assignment in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#duration_hours PimEligibleRoleAssignment#duration_hours}

---

##### `EndDateTime`<sup>Optional</sup> <a name="EndDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration.property.endDateTime"></a>

```go
EndDateTime *string
```

- *Type:* *string

The end date time of the assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#end_date_time PimEligibleRoleAssignment#end_date_time}

---

### PimEligibleRoleAssignmentTicket <a name="PimEligibleRoleAssignmentTicket" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

&pimeligibleroleassignment.PimEligibleRoleAssignmentTicket {
	Number: *string,
	SystemAttribute: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.number">Number</a></code> | <code>*string</code> | The ticket number. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.systemAttribute">SystemAttribute</a></code> | <code>*string</code> | The ticket system. |

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.number"></a>

```go
Number *string
```

- *Type:* *string

The ticket number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#number PimEligibleRoleAssignment#number}

---

##### `SystemAttribute`<sup>Optional</sup> <a name="SystemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket.property.systemAttribute"></a>

```go
SystemAttribute *string
```

- *Type:* *string

The ticket system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#system PimEligibleRoleAssignment#system}

---

### PimEligibleRoleAssignmentTimeouts <a name="PimEligibleRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

&pimeligibleroleassignment.PimEligibleRoleAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#create PimEligibleRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#delete PimEligibleRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#read PimEligibleRoleAssignment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#create PimEligibleRoleAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#delete PimEligibleRoleAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/pim_eligible_role_assignment#read PimEligibleRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PimEligibleRoleAssignmentScheduleExpirationOutputReference <a name="PimEligibleRoleAssignmentScheduleExpirationOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.NewPimEligibleRoleAssignmentScheduleExpirationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PimEligibleRoleAssignmentScheduleExpirationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationDays">ResetDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationHours">ResetDurationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime">ResetEndDateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationDays` <a name="ResetDurationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationDays"></a>

```go
func ResetDurationDays()
```

##### `ResetDurationHours` <a name="ResetDurationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetDurationHours"></a>

```go
func ResetDurationHours()
```

##### `ResetEndDateTime` <a name="ResetEndDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime"></a>

```go
func ResetEndDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput">DurationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput">DurationHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput">EndDateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDays">DurationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHours">DurationHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTime">EndDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationDaysInput`<sup>Optional</sup> <a name="DurationDaysInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput"></a>

```go
func DurationDaysInput() *f64
```

- *Type:* *f64

---

##### `DurationHoursInput`<sup>Optional</sup> <a name="DurationHoursInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput"></a>

```go
func DurationHoursInput() *f64
```

- *Type:* *f64

---

##### `EndDateTimeInput`<sup>Optional</sup> <a name="EndDateTimeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput"></a>

```go
func EndDateTimeInput() *string
```

- *Type:* *string

---

##### `DurationDays`<sup>Required</sup> <a name="DurationDays" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationDays"></a>

```go
func DurationDays() *f64
```

- *Type:* *f64

---

##### `DurationHours`<sup>Required</sup> <a name="DurationHours" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.durationHours"></a>

```go
func DurationHours() *f64
```

- *Type:* *f64

---

##### `EndDateTime`<sup>Required</sup> <a name="EndDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.endDateTime"></a>

```go
func EndDateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference.property.internalValue"></a>

```go
func InternalValue() PimEligibleRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---


### PimEligibleRoleAssignmentScheduleOutputReference <a name="PimEligibleRoleAssignmentScheduleOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.NewPimEligibleRoleAssignmentScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PimEligibleRoleAssignmentScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetStartDateTime">ResetStartDateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiration` <a name="PutExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration"></a>

```go
func PutExpiration(value PimEligibleRoleAssignmentScheduleExpiration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetStartDateTime` <a name="ResetStartDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.resetStartDateTime"></a>

```go
func ResetStartDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference">PimEligibleRoleAssignmentScheduleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expirationInput">ExpirationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTimeInput">StartDateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTime">StartDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expiration"></a>

```go
func Expiration() PimEligibleRoleAssignmentScheduleExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpirationOutputReference">PimEligibleRoleAssignmentScheduleExpirationOutputReference</a>

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.expirationInput"></a>

```go
func ExpirationInput() PimEligibleRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleExpiration">PimEligibleRoleAssignmentScheduleExpiration</a>

---

##### `StartDateTimeInput`<sup>Optional</sup> <a name="StartDateTimeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTimeInput"></a>

```go
func StartDateTimeInput() *string
```

- *Type:* *string

---

##### `StartDateTime`<sup>Required</sup> <a name="StartDateTime" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.startDateTime"></a>

```go
func StartDateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() PimEligibleRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentSchedule">PimEligibleRoleAssignmentSchedule</a>

---


### PimEligibleRoleAssignmentTicketOutputReference <a name="PimEligibleRoleAssignmentTicketOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.NewPimEligibleRoleAssignmentTicketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PimEligibleRoleAssignmentTicketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetSystemAttribute">ResetSystemAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetNumber"></a>

```go
func ResetNumber()
```

##### `ResetSystemAttribute` <a name="ResetSystemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.resetSystemAttribute"></a>

```go
func ResetSystemAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.numberInput">NumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttributeInput">SystemAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.number">Number</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.numberInput"></a>

```go
func NumberInput() *string
```

- *Type:* *string

---

##### `SystemAttributeInput`<sup>Optional</sup> <a name="SystemAttributeInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttributeInput"></a>

```go
func SystemAttributeInput() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.number"></a>

```go
func Number() *string
```

- *Type:* *string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.systemAttribute"></a>

```go
func SystemAttribute() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicketOutputReference.property.internalValue"></a>

```go
func InternalValue() PimEligibleRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTicket">PimEligibleRoleAssignmentTicket</a>

---


### PimEligibleRoleAssignmentTimeoutsOutputReference <a name="PimEligibleRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/pimeligibleroleassignment"

pimeligibleroleassignment.NewPimEligibleRoleAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PimEligibleRoleAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.pimEligibleRoleAssignment.PimEligibleRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



