# `automationHybridRunbookWorker` Submodule <a name="`automationHybridRunbookWorker` Submodule" id="@cdktf/provider-azurerm.automationHybridRunbookWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationHybridRunbookWorker <a name="AutomationHybridRunbookWorker" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker azurerm_automation_hybrid_runbook_worker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/automationhybridrunbookworker"

automationhybridrunbookworker.NewAutomationHybridRunbookWorker(scope Construct, id *string, config AutomationHybridRunbookWorkerConfig) AutomationHybridRunbookWorker
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig">AutomationHybridRunbookWorkerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig">AutomationHybridRunbookWorkerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts"></a>

```go
func PutTimeouts(value AutomationHybridRunbookWorkerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationHybridRunbookWorker resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/automationhybridrunbookworker"

automationhybridrunbookworker.AutomationHybridRunbookWorker_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/automationhybridrunbookworker"

automationhybridrunbookworker.AutomationHybridRunbookWorker_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/automationhybridrunbookworker"

automationhybridrunbookworker.AutomationHybridRunbookWorker_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/automationhybridrunbookworker"

automationhybridrunbookworker.AutomationHybridRunbookWorker_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationHybridRunbookWorker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationHybridRunbookWorker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationHybridRunbookWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationHybridRunbookWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lastSeenDateTime">LastSeenDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.registrationDateTime">RegistrationDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference">AutomationHybridRunbookWorkerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerName">WorkerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerType">WorkerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountNameInput">AutomationAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceIdInput">VmResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupNameInput">WorkerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerIdInput">WorkerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountName">AutomationAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceId">VmResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupName">WorkerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerId">WorkerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `LastSeenDateTime`<sup>Required</sup> <a name="LastSeenDateTime" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lastSeenDateTime"></a>

```go
func LastSeenDateTime() *string
```

- *Type:* *string

---

##### `RegistrationDateTime`<sup>Required</sup> <a name="RegistrationDateTime" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.registrationDateTime"></a>

```go
func RegistrationDateTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeouts"></a>

```go
func Timeouts() AutomationHybridRunbookWorkerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference">AutomationHybridRunbookWorkerTimeoutsOutputReference</a>

---

##### `WorkerName`<sup>Required</sup> <a name="WorkerName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerName"></a>

```go
func WorkerName() *string
```

- *Type:* *string

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerType"></a>

```go
func WorkerType() *string
```

- *Type:* *string

---

##### `AutomationAccountNameInput`<sup>Optional</sup> <a name="AutomationAccountNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountNameInput"></a>

```go
func AutomationAccountNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmResourceIdInput`<sup>Optional</sup> <a name="VmResourceIdInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceIdInput"></a>

```go
func VmResourceIdInput() *string
```

- *Type:* *string

---

##### `WorkerGroupNameInput`<sup>Optional</sup> <a name="WorkerGroupNameInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupNameInput"></a>

```go
func WorkerGroupNameInput() *string
```

- *Type:* *string

---

##### `WorkerIdInput`<sup>Optional</sup> <a name="WorkerIdInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerIdInput"></a>

```go
func WorkerIdInput() *string
```

- *Type:* *string

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountName"></a>

```go
func AutomationAccountName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `VmResourceId`<sup>Required</sup> <a name="VmResourceId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceId"></a>

```go
func VmResourceId() *string
```

- *Type:* *string

---

##### `WorkerGroupName`<sup>Required</sup> <a name="WorkerGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupName"></a>

```go
func WorkerGroupName() *string
```

- *Type:* *string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerId"></a>

```go
func WorkerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationHybridRunbookWorkerConfig <a name="AutomationHybridRunbookWorkerConfig" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/automationhybridrunbookworker"

&automationhybridrunbookworker.AutomationHybridRunbookWorkerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutomationAccountName: *string,
	ResourceGroupName: *string,
	VmResourceId: *string,
	WorkerGroupName: *string,
	WorkerId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.automationAccountName">AutomationAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.vmResourceId">VmResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerGroupName">WorkerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerId">WorkerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.automationAccountName"></a>

```go
AutomationAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}.

---

##### `VmResourceId`<sup>Required</sup> <a name="VmResourceId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.vmResourceId"></a>

```go
VmResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}.

---

##### `WorkerGroupName`<sup>Required</sup> <a name="WorkerGroupName" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerGroupName"></a>

```go
WorkerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}.

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerId"></a>

```go
WorkerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.timeouts"></a>

```go
Timeouts AutomationHybridRunbookWorkerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#timeouts AutomationHybridRunbookWorker#timeouts}

---

### AutomationHybridRunbookWorkerTimeouts <a name="AutomationHybridRunbookWorkerTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/automationhybridrunbookworker"

&automationhybridrunbookworker.AutomationHybridRunbookWorkerTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationHybridRunbookWorkerTimeoutsOutputReference <a name="AutomationHybridRunbookWorkerTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/automationhybridrunbookworker"

automationhybridrunbookworker.NewAutomationHybridRunbookWorkerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationHybridRunbookWorkerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



