# `botChannelMsTeams` Submodule <a name="`botChannelMsTeams` Submodule" id="@cdktf/provider-azurerm.botChannelMsTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelMsTeams <a name="BotChannelMsTeams" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams azurerm_bot_channel_ms_teams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/botchannelmsteams"

botchannelmsteams.NewBotChannelMsTeams(scope Construct, id *string, config BotChannelMsTeamsConfig) BotChannelMsTeams
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig">BotChannelMsTeamsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig">BotChannelMsTeamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetCallingWebHook">ResetCallingWebHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetDeploymentEnvironment">ResetDeploymentEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetEnableCalling">ResetEnableCalling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts"></a>

```go
func PutTimeouts(value BotChannelMsTeamsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a>

---

##### `ResetCallingWebHook` <a name="ResetCallingWebHook" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetCallingWebHook"></a>

```go
func ResetCallingWebHook()
```

##### `ResetDeploymentEnvironment` <a name="ResetDeploymentEnvironment" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetDeploymentEnvironment"></a>

```go
func ResetDeploymentEnvironment()
```

##### `ResetEnableCalling` <a name="ResetEnableCalling" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetEnableCalling"></a>

```go
func ResetEnableCalling()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BotChannelMsTeams resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/botchannelmsteams"

botchannelmsteams.BotChannelMsTeams_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/botchannelmsteams"

botchannelmsteams.BotChannelMsTeams_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/botchannelmsteams"

botchannelmsteams.BotChannelMsTeams_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/botchannelmsteams"

botchannelmsteams.BotChannelMsTeams_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BotChannelMsTeams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BotChannelMsTeams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BotChannelMsTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BotChannelMsTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference">BotChannelMsTeamsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.botNameInput">BotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.callingWebHookInput">CallingWebHookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.deploymentEnvironmentInput">DeploymentEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.enableCallingInput">EnableCallingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.botName">BotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.callingWebHook">CallingWebHook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.deploymentEnvironment">DeploymentEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.enableCalling">EnableCalling</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.timeouts"></a>

```go
func Timeouts() BotChannelMsTeamsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference">BotChannelMsTeamsTimeoutsOutputReference</a>

---

##### `BotNameInput`<sup>Optional</sup> <a name="BotNameInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.botNameInput"></a>

```go
func BotNameInput() *string
```

- *Type:* *string

---

##### `CallingWebHookInput`<sup>Optional</sup> <a name="CallingWebHookInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.callingWebHookInput"></a>

```go
func CallingWebHookInput() *string
```

- *Type:* *string

---

##### `DeploymentEnvironmentInput`<sup>Optional</sup> <a name="DeploymentEnvironmentInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.deploymentEnvironmentInput"></a>

```go
func DeploymentEnvironmentInput() *string
```

- *Type:* *string

---

##### `EnableCallingInput`<sup>Optional</sup> <a name="EnableCallingInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.enableCallingInput"></a>

```go
func EnableCallingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BotName`<sup>Required</sup> <a name="BotName" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.botName"></a>

```go
func BotName() *string
```

- *Type:* *string

---

##### `CallingWebHook`<sup>Required</sup> <a name="CallingWebHook" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.callingWebHook"></a>

```go
func CallingWebHook() *string
```

- *Type:* *string

---

##### `DeploymentEnvironment`<sup>Required</sup> <a name="DeploymentEnvironment" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.deploymentEnvironment"></a>

```go
func DeploymentEnvironment() *string
```

- *Type:* *string

---

##### `EnableCalling`<sup>Required</sup> <a name="EnableCalling" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.enableCalling"></a>

```go
func EnableCalling() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeams.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelMsTeamsConfig <a name="BotChannelMsTeamsConfig" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/botchannelmsteams"

&botchannelmsteams.BotChannelMsTeamsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BotName: *string,
	Location: *string,
	ResourceGroupName: *string,
	CallingWebHook: *string,
	DeploymentEnvironment: *string,
	EnableCalling: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.botChannelMsTeams.BotChannelMsTeamsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.botName">BotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#bot_name BotChannelMsTeams#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#location BotChannelMsTeams#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#resource_group_name BotChannelMsTeams#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.callingWebHook">CallingWebHook</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#calling_web_hook BotChannelMsTeams#calling_web_hook}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.deploymentEnvironment">DeploymentEnvironment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#deployment_environment BotChannelMsTeams#deployment_environment}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.enableCalling">EnableCalling</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#enable_calling BotChannelMsTeams#enable_calling}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#id BotChannelMsTeams#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BotName`<sup>Required</sup> <a name="BotName" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.botName"></a>

```go
BotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#bot_name BotChannelMsTeams#bot_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#location BotChannelMsTeams#location}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#resource_group_name BotChannelMsTeams#resource_group_name}.

---

##### `CallingWebHook`<sup>Optional</sup> <a name="CallingWebHook" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.callingWebHook"></a>

```go
CallingWebHook *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#calling_web_hook BotChannelMsTeams#calling_web_hook}.

---

##### `DeploymentEnvironment`<sup>Optional</sup> <a name="DeploymentEnvironment" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.deploymentEnvironment"></a>

```go
DeploymentEnvironment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#deployment_environment BotChannelMsTeams#deployment_environment}.

---

##### `EnableCalling`<sup>Optional</sup> <a name="EnableCalling" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.enableCalling"></a>

```go
EnableCalling interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#enable_calling BotChannelMsTeams#enable_calling}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#id BotChannelMsTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsConfig.property.timeouts"></a>

```go
Timeouts BotChannelMsTeamsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts">BotChannelMsTeamsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#timeouts BotChannelMsTeams#timeouts}

---

### BotChannelMsTeamsTimeouts <a name="BotChannelMsTeamsTimeouts" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/botchannelmsteams"

&botchannelmsteams.BotChannelMsTeamsTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#create BotChannelMsTeams#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#delete BotChannelMsTeams#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#read BotChannelMsTeams#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#update BotChannelMsTeams#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#create BotChannelMsTeams#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#delete BotChannelMsTeams#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#read BotChannelMsTeams#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/bot_channel_ms_teams#update BotChannelMsTeams#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelMsTeamsTimeoutsOutputReference <a name="BotChannelMsTeamsTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/botchannelmsteams"

botchannelmsteams.NewBotChannelMsTeamsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BotChannelMsTeamsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.botChannelMsTeams.BotChannelMsTeamsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



