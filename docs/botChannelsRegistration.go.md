# `botChannelsRegistration` Submodule <a name="`botChannelsRegistration` Submodule" id="@cdktf/provider-azurerm.botChannelsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelsRegistration <a name="BotChannelsRegistration" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration azurerm_bot_channels_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botchannelsregistration"

botchannelsregistration.NewBotChannelsRegistration(scope Construct, id *string, config BotChannelsRegistrationConfig) BotChannelsRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig">BotChannelsRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig">BotChannelsRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetCmkKeyVaultUrl">ResetCmkKeyVaultUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApiKey">ResetDeveloperAppInsightsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApplicationId">ResetDeveloperAppInsightsApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsKey">ResetDeveloperAppInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIconUrl">ResetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIsolatedNetworkEnabled">ResetIsolatedNetworkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetStreamingEndpointEnabled">ResetStreamingEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts"></a>

```go
func PutTimeouts(value BotChannelsRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>

---

##### `ResetCmkKeyVaultUrl` <a name="ResetCmkKeyVaultUrl" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetCmkKeyVaultUrl"></a>

```go
func ResetCmkKeyVaultUrl()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeveloperAppInsightsApiKey` <a name="ResetDeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApiKey"></a>

```go
func ResetDeveloperAppInsightsApiKey()
```

##### `ResetDeveloperAppInsightsApplicationId` <a name="ResetDeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsApplicationId"></a>

```go
func ResetDeveloperAppInsightsApplicationId()
```

##### `ResetDeveloperAppInsightsKey` <a name="ResetDeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDeveloperAppInsightsKey"></a>

```go
func ResetDeveloperAppInsightsKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetIconUrl` <a name="ResetIconUrl" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIconUrl"></a>

```go
func ResetIconUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetIsolatedNetworkEnabled` <a name="ResetIsolatedNetworkEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetIsolatedNetworkEnabled"></a>

```go
func ResetIsolatedNetworkEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetStreamingEndpointEnabled` <a name="ResetStreamingEndpointEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetStreamingEndpointEnabled"></a>

```go
func ResetStreamingEndpointEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BotChannelsRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botchannelsregistration"

botchannelsregistration.BotChannelsRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botchannelsregistration"

botchannelsregistration.BotChannelsRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botchannelsregistration"

botchannelsregistration.BotChannelsRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botchannelsregistration"

botchannelsregistration.BotChannelsRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BotChannelsRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BotChannelsRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BotChannelsRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BotChannelsRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference">BotChannelsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrlInput">CmkKeyVaultUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKeyInput">DeveloperAppInsightsApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationIdInput">DeveloperAppInsightsApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKeyInput">DeveloperAppInsightsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrlInput">IconUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.isolatedNetworkEnabledInput">IsolatedNetworkEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppIdInput">MicrosoftAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabledInput">StreamingEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrl">CmkKeyVaultUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrl">IconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.isolatedNetworkEnabled">IsolatedNetworkEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppId">MicrosoftAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabled">StreamingEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeouts"></a>

```go
func Timeouts() BotChannelsRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference">BotChannelsRegistrationTimeoutsOutputReference</a>

---

##### `CmkKeyVaultUrlInput`<sup>Optional</sup> <a name="CmkKeyVaultUrlInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrlInput"></a>

```go
func CmkKeyVaultUrlInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApiKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKeyInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKeyInput"></a>

```go
func DeveloperAppInsightsApiKeyInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApplicationIdInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationIdInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationIdInput"></a>

```go
func DeveloperAppInsightsApplicationIdInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsKeyInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKeyInput"></a>

```go
func DeveloperAppInsightsKeyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `IconUrlInput`<sup>Optional</sup> <a name="IconUrlInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrlInput"></a>

```go
func IconUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsolatedNetworkEnabledInput`<sup>Optional</sup> <a name="IsolatedNetworkEnabledInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.isolatedNetworkEnabledInput"></a>

```go
func IsolatedNetworkEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppIdInput`<sup>Optional</sup> <a name="MicrosoftAppIdInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppIdInput"></a>

```go
func MicrosoftAppIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `StreamingEndpointEnabledInput`<sup>Optional</sup> <a name="StreamingEndpointEnabledInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabledInput"></a>

```go
func StreamingEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CmkKeyVaultUrl`<sup>Required</sup> <a name="CmkKeyVaultUrl" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.cmkKeyVaultUrl"></a>

```go
func CmkKeyVaultUrl() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApiKey`<sup>Required</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApiKey"></a>

```go
func DeveloperAppInsightsApiKey() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApplicationId`<sup>Required</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsApplicationId"></a>

```go
func DeveloperAppInsightsApplicationId() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsKey`<sup>Required</sup> <a name="DeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.developerAppInsightsKey"></a>

```go
func DeveloperAppInsightsKey() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.iconUrl"></a>

```go
func IconUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsolatedNetworkEnabled`<sup>Required</sup> <a name="IsolatedNetworkEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.isolatedNetworkEnabled"></a>

```go
func IsolatedNetworkEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.microsoftAppId"></a>

```go
func MicrosoftAppId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `StreamingEndpointEnabled`<sup>Required</sup> <a name="StreamingEndpointEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.streamingEndpointEnabled"></a>

```go
func StreamingEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelsRegistrationConfig <a name="BotChannelsRegistrationConfig" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botchannelsregistration"

&botchannelsregistration.BotChannelsRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MicrosoftAppId: *string,
	Name: *string,
	ResourceGroupName: *string,
	Sku: *string,
	CmkKeyVaultUrl: *string,
	Description: *string,
	DeveloperAppInsightsApiKey: *string,
	DeveloperAppInsightsApplicationId: *string,
	DeveloperAppInsightsKey: *string,
	DisplayName: *string,
	Endpoint: *string,
	IconUrl: *string,
	Id: *string,
	IsolatedNetworkEnabled: interface{},
	PublicNetworkAccessEnabled: interface{},
	StreamingEndpointEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#location BotChannelsRegistration#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppId">MicrosoftAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#microsoft_app_id BotChannelsRegistration#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#name BotChannelsRegistration#name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#resource_group_name BotChannelsRegistration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#sku BotChannelsRegistration#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.cmkKeyVaultUrl">CmkKeyVaultUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#description BotChannelsRegistration#description}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#display_name BotChannelsRegistration#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#endpoint BotChannelsRegistration#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.iconUrl">IconUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#icon_url BotChannelsRegistration#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#id BotChannelsRegistration#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.isolatedNetworkEnabled">IsolatedNetworkEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#isolated_network_enabled BotChannelsRegistration#isolated_network_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#public_network_access_enabled BotChannelsRegistration#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.streamingEndpointEnabled">StreamingEndpointEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#streaming_endpoint_enabled BotChannelsRegistration#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#tags BotChannelsRegistration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#location BotChannelsRegistration#location}.

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.microsoftAppId"></a>

```go
MicrosoftAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#microsoft_app_id BotChannelsRegistration#microsoft_app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#name BotChannelsRegistration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#resource_group_name BotChannelsRegistration#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#sku BotChannelsRegistration#sku}.

---

##### `CmkKeyVaultUrl`<sup>Optional</sup> <a name="CmkKeyVaultUrl" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.cmkKeyVaultUrl"></a>

```go
CmkKeyVaultUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#cmk_key_vault_url BotChannelsRegistration#cmk_key_vault_url}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#description BotChannelsRegistration#description}.

---

##### `DeveloperAppInsightsApiKey`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApiKey"></a>

```go
DeveloperAppInsightsApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#developer_app_insights_api_key BotChannelsRegistration#developer_app_insights_api_key}.

---

##### `DeveloperAppInsightsApplicationId`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsApplicationId"></a>

```go
DeveloperAppInsightsApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#developer_app_insights_application_id BotChannelsRegistration#developer_app_insights_application_id}.

---

##### `DeveloperAppInsightsKey`<sup>Optional</sup> <a name="DeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.developerAppInsightsKey"></a>

```go
DeveloperAppInsightsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#developer_app_insights_key BotChannelsRegistration#developer_app_insights_key}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#display_name BotChannelsRegistration#display_name}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#endpoint BotChannelsRegistration#endpoint}.

---

##### `IconUrl`<sup>Optional</sup> <a name="IconUrl" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.iconUrl"></a>

```go
IconUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#icon_url BotChannelsRegistration#icon_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#id BotChannelsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsolatedNetworkEnabled`<sup>Optional</sup> <a name="IsolatedNetworkEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.isolatedNetworkEnabled"></a>

```go
IsolatedNetworkEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#isolated_network_enabled BotChannelsRegistration#isolated_network_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#public_network_access_enabled BotChannelsRegistration#public_network_access_enabled}.

---

##### `StreamingEndpointEnabled`<sup>Optional</sup> <a name="StreamingEndpointEnabled" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.streamingEndpointEnabled"></a>

```go
StreamingEndpointEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#streaming_endpoint_enabled BotChannelsRegistration#streaming_endpoint_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#tags BotChannelsRegistration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationConfig.property.timeouts"></a>

```go
Timeouts BotChannelsRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts">BotChannelsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#timeouts BotChannelsRegistration#timeouts}

---

### BotChannelsRegistrationTimeouts <a name="BotChannelsRegistrationTimeouts" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botchannelsregistration"

&botchannelsregistration.BotChannelsRegistrationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#create BotChannelsRegistration#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#delete BotChannelsRegistration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#read BotChannelsRegistration#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#update BotChannelsRegistration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#create BotChannelsRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#delete BotChannelsRegistration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#read BotChannelsRegistration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/bot_channels_registration#update BotChannelsRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelsRegistrationTimeoutsOutputReference <a name="BotChannelsRegistrationTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botchannelsregistration"

botchannelsregistration.NewBotChannelsRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BotChannelsRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.botChannelsRegistration.BotChannelsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



