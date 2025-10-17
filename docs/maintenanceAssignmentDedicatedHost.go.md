# `maintenanceAssignmentDedicatedHost` Submodule <a name="`maintenanceAssignmentDedicatedHost` Submodule" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceAssignmentDedicatedHost <a name="MaintenanceAssignmentDedicatedHost" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host azurerm_maintenance_assignment_dedicated_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/maintenanceassignmentdedicatedhost"

maintenanceassignmentdedicatedhost.NewMaintenanceAssignmentDedicatedHost(scope Construct, id *string, config MaintenanceAssignmentDedicatedHostConfig) MaintenanceAssignmentDedicatedHost
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig">MaintenanceAssignmentDedicatedHostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig">MaintenanceAssignmentDedicatedHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.putTimeouts"></a>

```go
func PutTimeouts(value MaintenanceAssignmentDedicatedHostTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts">MaintenanceAssignmentDedicatedHostTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MaintenanceAssignmentDedicatedHost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/maintenanceassignmentdedicatedhost"

maintenanceassignmentdedicatedhost.MaintenanceAssignmentDedicatedHost_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/maintenanceassignmentdedicatedhost"

maintenanceassignmentdedicatedhost.MaintenanceAssignmentDedicatedHost_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/maintenanceassignmentdedicatedhost"

maintenanceassignmentdedicatedhost.MaintenanceAssignmentDedicatedHost_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/maintenanceassignmentdedicatedhost"

maintenanceassignmentdedicatedhost.MaintenanceAssignmentDedicatedHost_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MaintenanceAssignmentDedicatedHost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MaintenanceAssignmentDedicatedHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MaintenanceAssignmentDedicatedHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MaintenanceAssignmentDedicatedHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference">MaintenanceAssignmentDedicatedHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dedicatedHostIdInput">DedicatedHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.maintenanceConfigurationIdInput">MaintenanceConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dedicatedHostId">DedicatedHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.maintenanceConfigurationId">MaintenanceConfigurationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.timeouts"></a>

```go
func Timeouts() MaintenanceAssignmentDedicatedHostTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference">MaintenanceAssignmentDedicatedHostTimeoutsOutputReference</a>

---

##### `DedicatedHostIdInput`<sup>Optional</sup> <a name="DedicatedHostIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dedicatedHostIdInput"></a>

```go
func DedicatedHostIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceConfigurationIdInput`<sup>Optional</sup> <a name="MaintenanceConfigurationIdInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.maintenanceConfigurationIdInput"></a>

```go
func MaintenanceConfigurationIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.dedicatedHostId"></a>

```go
func DedicatedHostId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaintenanceConfigurationId`<sup>Required</sup> <a name="MaintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.maintenanceConfigurationId"></a>

```go
func MaintenanceConfigurationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHost.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceAssignmentDedicatedHostConfig <a name="MaintenanceAssignmentDedicatedHostConfig" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/maintenanceassignmentdedicatedhost"

&maintenanceassignmentdedicatedhost.MaintenanceAssignmentDedicatedHostConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DedicatedHostId: *string,
	Location: *string,
	MaintenanceConfigurationId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.dedicatedHostId">DedicatedHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#dedicated_host_id MaintenanceAssignmentDedicatedHost#dedicated_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#location MaintenanceAssignmentDedicatedHost#location}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.maintenanceConfigurationId">MaintenanceConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#maintenance_configuration_id MaintenanceAssignmentDedicatedHost#maintenance_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#id MaintenanceAssignmentDedicatedHost#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts">MaintenanceAssignmentDedicatedHostTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DedicatedHostId`<sup>Required</sup> <a name="DedicatedHostId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.dedicatedHostId"></a>

```go
DedicatedHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#dedicated_host_id MaintenanceAssignmentDedicatedHost#dedicated_host_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#location MaintenanceAssignmentDedicatedHost#location}.

---

##### `MaintenanceConfigurationId`<sup>Required</sup> <a name="MaintenanceConfigurationId" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.maintenanceConfigurationId"></a>

```go
MaintenanceConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#maintenance_configuration_id MaintenanceAssignmentDedicatedHost#maintenance_configuration_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#id MaintenanceAssignmentDedicatedHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostConfig.property.timeouts"></a>

```go
Timeouts MaintenanceAssignmentDedicatedHostTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts">MaintenanceAssignmentDedicatedHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#timeouts MaintenanceAssignmentDedicatedHost#timeouts}

---

### MaintenanceAssignmentDedicatedHostTimeouts <a name="MaintenanceAssignmentDedicatedHostTimeouts" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/maintenanceassignmentdedicatedhost"

&maintenanceassignmentdedicatedhost.MaintenanceAssignmentDedicatedHostTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#create MaintenanceAssignmentDedicatedHost#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#delete MaintenanceAssignmentDedicatedHost#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#read MaintenanceAssignmentDedicatedHost#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#create MaintenanceAssignmentDedicatedHost#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#delete MaintenanceAssignmentDedicatedHost#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/maintenance_assignment_dedicated_host#read MaintenanceAssignmentDedicatedHost#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceAssignmentDedicatedHostTimeoutsOutputReference <a name="MaintenanceAssignmentDedicatedHostTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/maintenanceassignmentdedicatedhost"

maintenanceassignmentdedicatedhost.NewMaintenanceAssignmentDedicatedHostTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MaintenanceAssignmentDedicatedHostTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.maintenanceAssignmentDedicatedHost.MaintenanceAssignmentDedicatedHostTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



