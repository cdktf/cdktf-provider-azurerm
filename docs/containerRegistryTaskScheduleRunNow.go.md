# `containerRegistryTaskScheduleRunNow` Submodule <a name="`containerRegistryTaskScheduleRunNow` Submodule" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryTaskScheduleRunNow <a name="ContainerRegistryTaskScheduleRunNow" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now azurerm_container_registry_task_schedule_run_now}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerregistrytaskschedulerunnow"

containerregistrytaskschedulerunnow.NewContainerRegistryTaskScheduleRunNow(scope Construct, id *string, config ContainerRegistryTaskScheduleRunNowConfig) ContainerRegistryTaskScheduleRunNow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig">ContainerRegistryTaskScheduleRunNowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig">ContainerRegistryTaskScheduleRunNowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.putTimeouts"></a>

```go
func PutTimeouts(value ContainerRegistryTaskScheduleRunNowTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryTaskScheduleRunNow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerregistrytaskschedulerunnow"

containerregistrytaskschedulerunnow.ContainerRegistryTaskScheduleRunNow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerregistrytaskschedulerunnow"

containerregistrytaskschedulerunnow.ContainerRegistryTaskScheduleRunNow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerregistrytaskschedulerunnow"

containerregistrytaskschedulerunnow.ContainerRegistryTaskScheduleRunNow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerregistrytaskschedulerunnow"

containerregistrytaskschedulerunnow.ContainerRegistryTaskScheduleRunNow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerRegistryTaskScheduleRunNow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerRegistryTaskScheduleRunNow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerRegistryTaskScheduleRunNow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryTaskScheduleRunNow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference">ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.containerRegistryTaskIdInput">ContainerRegistryTaskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.containerRegistryTaskId">ContainerRegistryTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.timeouts"></a>

```go
func Timeouts() ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference">ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference</a>

---

##### `ContainerRegistryTaskIdInput`<sup>Optional</sup> <a name="ContainerRegistryTaskIdInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.containerRegistryTaskIdInput"></a>

```go
func ContainerRegistryTaskIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerRegistryTaskId`<sup>Required</sup> <a name="ContainerRegistryTaskId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.containerRegistryTaskId"></a>

```go
func ContainerRegistryTaskId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTaskScheduleRunNowConfig <a name="ContainerRegistryTaskScheduleRunNowConfig" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerregistrytaskschedulerunnow"

&containerregistrytaskschedulerunnow.ContainerRegistryTaskScheduleRunNowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerRegistryTaskId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.containerRegistryTaskId">ContainerRegistryTaskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#container_registry_task_id ContainerRegistryTaskScheduleRunNow#container_registry_task_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#id ContainerRegistryTaskScheduleRunNow#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerRegistryTaskId`<sup>Required</sup> <a name="ContainerRegistryTaskId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.containerRegistryTaskId"></a>

```go
ContainerRegistryTaskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#container_registry_task_id ContainerRegistryTaskScheduleRunNow#container_registry_task_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#id ContainerRegistryTaskScheduleRunNow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.timeouts"></a>

```go
Timeouts ContainerRegistryTaskScheduleRunNowTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#timeouts ContainerRegistryTaskScheduleRunNow#timeouts}

---

### ContainerRegistryTaskScheduleRunNowTimeouts <a name="ContainerRegistryTaskScheduleRunNowTimeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerregistrytaskschedulerunnow"

&containerregistrytaskschedulerunnow.ContainerRegistryTaskScheduleRunNowTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#create ContainerRegistryTaskScheduleRunNow#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#delete ContainerRegistryTaskScheduleRunNow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#read ContainerRegistryTaskScheduleRunNow#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#create ContainerRegistryTaskScheduleRunNow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#delete ContainerRegistryTaskScheduleRunNow#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/container_registry_task_schedule_run_now#read ContainerRegistryTaskScheduleRunNow#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference <a name="ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/containerregistrytaskschedulerunnow"

containerregistrytaskschedulerunnow.NewContainerRegistryTaskScheduleRunNowTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



