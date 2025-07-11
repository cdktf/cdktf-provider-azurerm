# `automationWatcher` Submodule <a name="`automationWatcher` Submodule" id="@cdktf/provider-azurerm.automationWatcher"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationWatcher <a name="AutomationWatcher" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher azurerm_automation_watcher}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationwatcher"

automationwatcher.NewAutomationWatcher(scope Construct, id *string, config AutomationWatcherConfig) AutomationWatcher
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig">AutomationWatcherConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig">AutomationWatcherConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetScriptParameters">ResetScriptParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.putTimeouts"></a>

```go
func PutTimeouts(value AutomationWatcherTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts">AutomationWatcherTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetId"></a>

```go
func ResetId()
```

##### `ResetScriptParameters` <a name="ResetScriptParameters" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetScriptParameters"></a>

```go
func ResetScriptParameters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationWatcher resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationwatcher"

automationwatcher.AutomationWatcher_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationwatcher"

automationwatcher.AutomationWatcher_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationwatcher"

automationwatcher.AutomationWatcher_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationwatcher"

automationwatcher.AutomationWatcher_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationWatcher resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationWatcher to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationWatcher that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationWatcher to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference">AutomationWatcherTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.automationAccountIdInput">AutomationAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.executionFrequencyInSecondsInput">ExecutionFrequencyInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptNameInput">ScriptNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptParametersInput">ScriptParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptRunOnInput">ScriptRunOnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.automationAccountId">AutomationAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.executionFrequencyInSeconds">ExecutionFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptName">ScriptName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptParameters">ScriptParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptRunOn">ScriptRunOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.timeouts"></a>

```go
func Timeouts() AutomationWatcherTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference">AutomationWatcherTimeoutsOutputReference</a>

---

##### `AutomationAccountIdInput`<sup>Optional</sup> <a name="AutomationAccountIdInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.automationAccountIdInput"></a>

```go
func AutomationAccountIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `ExecutionFrequencyInSecondsInput`<sup>Optional</sup> <a name="ExecutionFrequencyInSecondsInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.executionFrequencyInSecondsInput"></a>

```go
func ExecutionFrequencyInSecondsInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptNameInput"></a>

```go
func ScriptNameInput() *string
```

- *Type:* *string

---

##### `ScriptParametersInput`<sup>Optional</sup> <a name="ScriptParametersInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptParametersInput"></a>

```go
func ScriptParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ScriptRunOnInput`<sup>Optional</sup> <a name="ScriptRunOnInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptRunOnInput"></a>

```go
func ScriptRunOnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.automationAccountId"></a>

```go
func AutomationAccountId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExecutionFrequencyInSeconds`<sup>Required</sup> <a name="ExecutionFrequencyInSeconds" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.executionFrequencyInSeconds"></a>

```go
func ExecutionFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptName"></a>

```go
func ScriptName() *string
```

- *Type:* *string

---

##### `ScriptParameters`<sup>Required</sup> <a name="ScriptParameters" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptParameters"></a>

```go
func ScriptParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ScriptRunOn`<sup>Required</sup> <a name="ScriptRunOn" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.scriptRunOn"></a>

```go
func ScriptRunOn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcher.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationWatcherConfig <a name="AutomationWatcherConfig" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationwatcher"

&automationwatcher.AutomationWatcherConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutomationAccountId: *string,
	ExecutionFrequencyInSeconds: *f64,
	Location: *string,
	Name: *string,
	ScriptName: *string,
	ScriptRunOn: *string,
	Description: *string,
	Etag: *string,
	Id: *string,
	ScriptParameters: *map[string]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.automationWatcher.AutomationWatcherTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.automationAccountId">AutomationAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#automation_account_id AutomationWatcher#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.executionFrequencyInSeconds">ExecutionFrequencyInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#execution_frequency_in_seconds AutomationWatcher#execution_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#location AutomationWatcher#location}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#name AutomationWatcher#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.scriptName">ScriptName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#script_name AutomationWatcher#script_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.scriptRunOn">ScriptRunOn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#script_run_on AutomationWatcher#script_run_on}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#description AutomationWatcher#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#etag AutomationWatcher#etag}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#id AutomationWatcher#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.scriptParameters">ScriptParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#script_parameters AutomationWatcher#script_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#tags AutomationWatcher#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts">AutomationWatcherTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.automationAccountId"></a>

```go
AutomationAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#automation_account_id AutomationWatcher#automation_account_id}.

---

##### `ExecutionFrequencyInSeconds`<sup>Required</sup> <a name="ExecutionFrequencyInSeconds" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.executionFrequencyInSeconds"></a>

```go
ExecutionFrequencyInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#execution_frequency_in_seconds AutomationWatcher#execution_frequency_in_seconds}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#location AutomationWatcher#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#name AutomationWatcher#name}.

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.scriptName"></a>

```go
ScriptName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#script_name AutomationWatcher#script_name}.

---

##### `ScriptRunOn`<sup>Required</sup> <a name="ScriptRunOn" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.scriptRunOn"></a>

```go
ScriptRunOn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#script_run_on AutomationWatcher#script_run_on}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#description AutomationWatcher#description}.

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#etag AutomationWatcher#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#id AutomationWatcher#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScriptParameters`<sup>Optional</sup> <a name="ScriptParameters" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.scriptParameters"></a>

```go
ScriptParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#script_parameters AutomationWatcher#script_parameters}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#tags AutomationWatcher#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherConfig.property.timeouts"></a>

```go
Timeouts AutomationWatcherTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts">AutomationWatcherTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#timeouts AutomationWatcher#timeouts}

---

### AutomationWatcherTimeouts <a name="AutomationWatcherTimeouts" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationwatcher"

&automationwatcher.AutomationWatcherTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#create AutomationWatcher#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#delete AutomationWatcher#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#read AutomationWatcher#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#update AutomationWatcher#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#create AutomationWatcher#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#delete AutomationWatcher#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#read AutomationWatcher#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/automation_watcher#update AutomationWatcher#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationWatcherTimeoutsOutputReference <a name="AutomationWatcherTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/automationwatcher"

automationwatcher.NewAutomationWatcherTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationWatcherTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationWatcher.AutomationWatcherTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



