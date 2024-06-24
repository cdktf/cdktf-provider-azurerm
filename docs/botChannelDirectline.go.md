# `botChannelDirectline` Submodule <a name="`botChannelDirectline` Submodule" id="@cdktf/provider-azurerm.botChannelDirectline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelDirectline <a name="BotChannelDirectline" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline azurerm_bot_channel_directline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

botchanneldirectline.NewBotChannelDirectline(scope Construct, id *string, config BotChannelDirectlineConfig) BotChannelDirectline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig">BotChannelDirectlineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig">BotChannelDirectlineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite">PutSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSite` <a name="PutSite" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite"></a>

```go
func PutSite(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putSite.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts"></a>

```go
func PutTimeouts(value BotChannelDirectlineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BotChannelDirectline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

botchanneldirectline.BotChannelDirectline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

botchanneldirectline.BotChannelDirectline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

botchanneldirectline.BotChannelDirectline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

botchanneldirectline.BotChannelDirectline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BotChannelDirectline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BotChannelDirectline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BotChannelDirectline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BotChannelDirectline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.site">Site</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList">BotChannelDirectlineSiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference">BotChannelDirectlineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botNameInput">BotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.siteInput">SiteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botName">BotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.site"></a>

```go
func Site() BotChannelDirectlineSiteList
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList">BotChannelDirectlineSiteList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeouts"></a>

```go
func Timeouts() BotChannelDirectlineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference">BotChannelDirectlineTimeoutsOutputReference</a>

---

##### `BotNameInput`<sup>Optional</sup> <a name="BotNameInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botNameInput"></a>

```go
func BotNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SiteInput`<sup>Optional</sup> <a name="SiteInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.siteInput"></a>

```go
func SiteInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BotName`<sup>Required</sup> <a name="BotName" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.botName"></a>

```go
func BotName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelDirectlineConfig <a name="BotChannelDirectlineConfig" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

&botchanneldirectline.BotChannelDirectlineConfig {
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
	Site: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.botChannelDirectline.BotChannelDirectlineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.botName">BotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#bot_name BotChannelDirectline#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#location BotChannelDirectline#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.site">Site</a></code> | <code>interface{}</code> | site block. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#id BotChannelDirectline#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BotName`<sup>Required</sup> <a name="BotName" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.botName"></a>

```go
BotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#bot_name BotChannelDirectline#bot_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#location BotChannelDirectline#location}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}.

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.site"></a>

```go
Site interface{}
```

- *Type:* interface{}

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#site BotChannelDirectline#site}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#id BotChannelDirectline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineConfig.property.timeouts"></a>

```go
Timeouts BotChannelDirectlineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts">BotChannelDirectlineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#timeouts BotChannelDirectline#timeouts}

---

### BotChannelDirectlineSite <a name="BotChannelDirectlineSite" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

&botchanneldirectline.BotChannelDirectlineSite {
	Name: *string,
	Enabled: interface{},
	EndpointParametersEnabled: interface{},
	EnhancedAuthenticationEnabled: interface{},
	StorageEnabled: interface{},
	TrustedOrigins: *[]*string,
	UserUploadEnabled: interface{},
	V1Allowed: interface{},
	V3Allowed: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#name BotChannelDirectline#name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#enabled BotChannelDirectline#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.endpointParametersEnabled">EndpointParametersEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#endpoint_parameters_enabled BotChannelDirectline#endpoint_parameters_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enhancedAuthenticationEnabled">EnhancedAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#enhanced_authentication_enabled BotChannelDirectline#enhanced_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.storageEnabled">StorageEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#storage_enabled BotChannelDirectline#storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.trustedOrigins">TrustedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#trusted_origins BotChannelDirectline#trusted_origins}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.userUploadEnabled">UserUploadEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#user_upload_enabled BotChannelDirectline#user_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v1Allowed">V1Allowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#v1_allowed BotChannelDirectline#v1_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v3Allowed">V3Allowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#v3_allowed BotChannelDirectline#v3_allowed}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#name BotChannelDirectline#name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#enabled BotChannelDirectline#enabled}.

---

##### `EndpointParametersEnabled`<sup>Optional</sup> <a name="EndpointParametersEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.endpointParametersEnabled"></a>

```go
EndpointParametersEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#endpoint_parameters_enabled BotChannelDirectline#endpoint_parameters_enabled}.

---

##### `EnhancedAuthenticationEnabled`<sup>Optional</sup> <a name="EnhancedAuthenticationEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.enhancedAuthenticationEnabled"></a>

```go
EnhancedAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#enhanced_authentication_enabled BotChannelDirectline#enhanced_authentication_enabled}.

---

##### `StorageEnabled`<sup>Optional</sup> <a name="StorageEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.storageEnabled"></a>

```go
StorageEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#storage_enabled BotChannelDirectline#storage_enabled}.

---

##### `TrustedOrigins`<sup>Optional</sup> <a name="TrustedOrigins" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.trustedOrigins"></a>

```go
TrustedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#trusted_origins BotChannelDirectline#trusted_origins}.

---

##### `UserUploadEnabled`<sup>Optional</sup> <a name="UserUploadEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.userUploadEnabled"></a>

```go
UserUploadEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#user_upload_enabled BotChannelDirectline#user_upload_enabled}.

---

##### `V1Allowed`<sup>Optional</sup> <a name="V1Allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v1Allowed"></a>

```go
V1Allowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#v1_allowed BotChannelDirectline#v1_allowed}.

---

##### `V3Allowed`<sup>Optional</sup> <a name="V3Allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSite.property.v3Allowed"></a>

```go
V3Allowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#v3_allowed BotChannelDirectline#v3_allowed}.

---

### BotChannelDirectlineTimeouts <a name="BotChannelDirectlineTimeouts" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

&botchanneldirectline.BotChannelDirectlineTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#create BotChannelDirectline#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#delete BotChannelDirectline#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#read BotChannelDirectline#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#update BotChannelDirectline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#create BotChannelDirectline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#delete BotChannelDirectline#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#read BotChannelDirectline#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/bot_channel_directline#update BotChannelDirectline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelDirectlineSiteList <a name="BotChannelDirectlineSiteList" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

botchanneldirectline.NewBotChannelDirectlineSiteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BotChannelDirectlineSiteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get"></a>

```go
func Get(index *f64) BotChannelDirectlineSiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BotChannelDirectlineSiteOutputReference <a name="BotChannelDirectlineSiteOutputReference" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

botchanneldirectline.NewBotChannelDirectlineSiteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BotChannelDirectlineSiteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEndpointParametersEnabled">ResetEndpointParametersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnhancedAuthenticationEnabled">ResetEnhancedAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetStorageEnabled">ResetStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetTrustedOrigins">ResetTrustedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetUserUploadEnabled">ResetUserUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV1Allowed">ResetV1Allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV3Allowed">ResetV3Allowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEndpointParametersEnabled` <a name="ResetEndpointParametersEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEndpointParametersEnabled"></a>

```go
func ResetEndpointParametersEnabled()
```

##### `ResetEnhancedAuthenticationEnabled` <a name="ResetEnhancedAuthenticationEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetEnhancedAuthenticationEnabled"></a>

```go
func ResetEnhancedAuthenticationEnabled()
```

##### `ResetStorageEnabled` <a name="ResetStorageEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetStorageEnabled"></a>

```go
func ResetStorageEnabled()
```

##### `ResetTrustedOrigins` <a name="ResetTrustedOrigins" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetTrustedOrigins"></a>

```go
func ResetTrustedOrigins()
```

##### `ResetUserUploadEnabled` <a name="ResetUserUploadEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetUserUploadEnabled"></a>

```go
func ResetUserUploadEnabled()
```

##### `ResetV1Allowed` <a name="ResetV1Allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV1Allowed"></a>

```go
func ResetV1Allowed()
```

##### `ResetV3Allowed` <a name="ResetV3Allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.resetV3Allowed"></a>

```go
func ResetV3Allowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key2">Key2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.endpointParametersEnabledInput">EndpointParametersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabledInput">EnhancedAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.storageEnabledInput">StorageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOriginsInput">TrustedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.userUploadEnabledInput">UserUploadEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1AllowedInput">V1AllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3AllowedInput">V3AllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.endpointParametersEnabled">EndpointParametersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabled">EnhancedAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.storageEnabled">StorageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOrigins">TrustedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.userUploadEnabled">UserUploadEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1Allowed">V1Allowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3Allowed">V3Allowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Key2`<sup>Required</sup> <a name="Key2" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.key2"></a>

```go
func Key2() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointParametersEnabledInput`<sup>Optional</sup> <a name="EndpointParametersEnabledInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.endpointParametersEnabledInput"></a>

```go
func EndpointParametersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnhancedAuthenticationEnabledInput`<sup>Optional</sup> <a name="EnhancedAuthenticationEnabledInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabledInput"></a>

```go
func EnhancedAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StorageEnabledInput`<sup>Optional</sup> <a name="StorageEnabledInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.storageEnabledInput"></a>

```go
func StorageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TrustedOriginsInput`<sup>Optional</sup> <a name="TrustedOriginsInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOriginsInput"></a>

```go
func TrustedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserUploadEnabledInput`<sup>Optional</sup> <a name="UserUploadEnabledInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.userUploadEnabledInput"></a>

```go
func UserUploadEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `V1AllowedInput`<sup>Optional</sup> <a name="V1AllowedInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1AllowedInput"></a>

```go
func V1AllowedInput() interface{}
```

- *Type:* interface{}

---

##### `V3AllowedInput`<sup>Optional</sup> <a name="V3AllowedInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3AllowedInput"></a>

```go
func V3AllowedInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EndpointParametersEnabled`<sup>Required</sup> <a name="EndpointParametersEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.endpointParametersEnabled"></a>

```go
func EndpointParametersEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnhancedAuthenticationEnabled`<sup>Required</sup> <a name="EnhancedAuthenticationEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.enhancedAuthenticationEnabled"></a>

```go
func EnhancedAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageEnabled`<sup>Required</sup> <a name="StorageEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.storageEnabled"></a>

```go
func StorageEnabled() interface{}
```

- *Type:* interface{}

---

##### `TrustedOrigins`<sup>Required</sup> <a name="TrustedOrigins" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.trustedOrigins"></a>

```go
func TrustedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `UserUploadEnabled`<sup>Required</sup> <a name="UserUploadEnabled" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.userUploadEnabled"></a>

```go
func UserUploadEnabled() interface{}
```

- *Type:* interface{}

---

##### `V1Allowed`<sup>Required</sup> <a name="V1Allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v1Allowed"></a>

```go
func V1Allowed() interface{}
```

- *Type:* interface{}

---

##### `V3Allowed`<sup>Required</sup> <a name="V3Allowed" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.v3Allowed"></a>

```go
func V3Allowed() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineSiteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BotChannelDirectlineTimeoutsOutputReference <a name="BotChannelDirectlineTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/botchanneldirectline"

botchanneldirectline.NewBotChannelDirectlineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BotChannelDirectlineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.botChannelDirectline.BotChannelDirectlineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



