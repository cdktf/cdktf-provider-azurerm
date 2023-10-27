# `azurerm_bot_service_azure_bot`

Refer to the Terraform Registory for docs: [`azurerm_bot_service_azure_bot`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot).

# `botServiceAzureBot` Submodule <a name="`botServiceAzureBot` Submodule" id="@cdktf/provider-azurerm.botServiceAzureBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotServiceAzureBot <a name="BotServiceAzureBot" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot azurerm_bot_service_azure_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botserviceazurebot"

botserviceazurebot.NewBotServiceAzureBot(scope Construct, id *string, config BotServiceAzureBotConfig) BotServiceAzureBot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig">BotServiceAzureBotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig">BotServiceAzureBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey">ResetDeveloperAppInsightsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId">ResetDeveloperAppInsightsApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey">ResetDeveloperAppInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetIconUrl">ResetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLocalAuthenticationEnabled">ResetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds">ResetLuisAppIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey">ResetLuisKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId">ResetMicrosoftAppMsiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId">ResetMicrosoftAppTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType">ResetMicrosoftAppType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled">ResetStreamingEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts"></a>

```go
func PutTimeouts(value BotServiceAzureBotTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

---

##### `ResetDeveloperAppInsightsApiKey` <a name="ResetDeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey"></a>

```go
func ResetDeveloperAppInsightsApiKey()
```

##### `ResetDeveloperAppInsightsApplicationId` <a name="ResetDeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId"></a>

```go
func ResetDeveloperAppInsightsApplicationId()
```

##### `ResetDeveloperAppInsightsKey` <a name="ResetDeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey"></a>

```go
func ResetDeveloperAppInsightsKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetIconUrl` <a name="ResetIconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetIconUrl"></a>

```go
func ResetIconUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId"></a>

```go
func ResetId()
```

##### `ResetLocalAuthenticationEnabled` <a name="ResetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLocalAuthenticationEnabled"></a>

```go
func ResetLocalAuthenticationEnabled()
```

##### `ResetLuisAppIds` <a name="ResetLuisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds"></a>

```go
func ResetLuisAppIds()
```

##### `ResetLuisKey` <a name="ResetLuisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey"></a>

```go
func ResetLuisKey()
```

##### `ResetMicrosoftAppMsiId` <a name="ResetMicrosoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId"></a>

```go
func ResetMicrosoftAppMsiId()
```

##### `ResetMicrosoftAppTenantId` <a name="ResetMicrosoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId"></a>

```go
func ResetMicrosoftAppTenantId()
```

##### `ResetMicrosoftAppType` <a name="ResetMicrosoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType"></a>

```go
func ResetMicrosoftAppType()
```

##### `ResetStreamingEndpointEnabled` <a name="ResetStreamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled"></a>

```go
func ResetStreamingEndpointEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BotServiceAzureBot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botserviceazurebot"

botserviceazurebot.BotServiceAzureBot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botserviceazurebot"

botserviceazurebot.BotServiceAzureBot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botserviceazurebot"

botserviceazurebot.BotServiceAzureBot_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botserviceazurebot"

botserviceazurebot.BotServiceAzureBot_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BotServiceAzureBot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BotServiceAzureBot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BotServiceAzureBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BotServiceAzureBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput">DeveloperAppInsightsApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput">DeveloperAppInsightsApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput">DeveloperAppInsightsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrlInput">IconUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabledInput">LocalAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput">LuisAppIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput">LuisKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput">MicrosoftAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput">MicrosoftAppMsiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput">MicrosoftAppTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput">MicrosoftAppTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput">StreamingEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrl">IconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds">LuisAppIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey">LuisKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId">MicrosoftAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId">MicrosoftAppMsiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId">MicrosoftAppTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType">MicrosoftAppType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled">StreamingEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts"></a>

```go
func Timeouts() BotServiceAzureBotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a>

---

##### `DeveloperAppInsightsApiKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput"></a>

```go
func DeveloperAppInsightsApiKeyInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApplicationIdInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput"></a>

```go
func DeveloperAppInsightsApplicationIdInput() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput"></a>

```go
func DeveloperAppInsightsKeyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `IconUrlInput`<sup>Optional</sup> <a name="IconUrlInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrlInput"></a>

```go
func IconUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalAuthenticationEnabledInput`<sup>Optional</sup> <a name="LocalAuthenticationEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabledInput"></a>

```go
func LocalAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LuisAppIdsInput`<sup>Optional</sup> <a name="LuisAppIdsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput"></a>

```go
func LuisAppIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LuisKeyInput`<sup>Optional</sup> <a name="LuisKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput"></a>

```go
func LuisKeyInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppIdInput`<sup>Optional</sup> <a name="MicrosoftAppIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput"></a>

```go
func MicrosoftAppIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppMsiIdInput`<sup>Optional</sup> <a name="MicrosoftAppMsiIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput"></a>

```go
func MicrosoftAppMsiIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppTenantIdInput`<sup>Optional</sup> <a name="MicrosoftAppTenantIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput"></a>

```go
func MicrosoftAppTenantIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftAppTypeInput`<sup>Optional</sup> <a name="MicrosoftAppTypeInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput"></a>

```go
func MicrosoftAppTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `StreamingEndpointEnabledInput`<sup>Optional</sup> <a name="StreamingEndpointEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput"></a>

```go
func StreamingEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeveloperAppInsightsApiKey`<sup>Required</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey"></a>

```go
func DeveloperAppInsightsApiKey() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsApplicationId`<sup>Required</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId"></a>

```go
func DeveloperAppInsightsApplicationId() *string
```

- *Type:* *string

---

##### `DeveloperAppInsightsKey`<sup>Required</sup> <a name="DeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey"></a>

```go
func DeveloperAppInsightsKey() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrl"></a>

```go
func IconUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAuthenticationEnabled`<sup>Required</sup> <a name="LocalAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabled"></a>

```go
func LocalAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LuisAppIds`<sup>Required</sup> <a name="LuisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds"></a>

```go
func LuisAppIds() *[]*string
```

- *Type:* *[]*string

---

##### `LuisKey`<sup>Required</sup> <a name="LuisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey"></a>

```go
func LuisKey() *string
```

- *Type:* *string

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId"></a>

```go
func MicrosoftAppId() *string
```

- *Type:* *string

---

##### `MicrosoftAppMsiId`<sup>Required</sup> <a name="MicrosoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId"></a>

```go
func MicrosoftAppMsiId() *string
```

- *Type:* *string

---

##### `MicrosoftAppTenantId`<sup>Required</sup> <a name="MicrosoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId"></a>

```go
func MicrosoftAppTenantId() *string
```

- *Type:* *string

---

##### `MicrosoftAppType`<sup>Required</sup> <a name="MicrosoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType"></a>

```go
func MicrosoftAppType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `StreamingEndpointEnabled`<sup>Required</sup> <a name="StreamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled"></a>

```go
func StreamingEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BotServiceAzureBotConfig <a name="BotServiceAzureBotConfig" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botserviceazurebot"

&botserviceazurebot.BotServiceAzureBotConfig {
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
	DeveloperAppInsightsApiKey: *string,
	DeveloperAppInsightsApplicationId: *string,
	DeveloperAppInsightsKey: *string,
	DisplayName: *string,
	Endpoint: *string,
	IconUrl: *string,
	Id: *string,
	LocalAuthenticationEnabled: interface{},
	LuisAppIds: *[]*string,
	LuisKey: *string,
	MicrosoftAppMsiId: *string,
	MicrosoftAppTenantId: *string,
	MicrosoftAppType: *string,
	StreamingEndpointEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId">MicrosoftAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.iconUrl">IconUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds">LuisAppIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey">LuisKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId">MicrosoftAppMsiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId">MicrosoftAppTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType">MicrosoftAppType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled">StreamingEndpointEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}.

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId"></a>

```go
MicrosoftAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}.

---

##### `DeveloperAppInsightsApiKey`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey"></a>

```go
DeveloperAppInsightsApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}.

---

##### `DeveloperAppInsightsApplicationId`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId"></a>

```go
DeveloperAppInsightsApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}.

---

##### `DeveloperAppInsightsKey`<sup>Optional</sup> <a name="DeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey"></a>

```go
DeveloperAppInsightsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}.

---

##### `IconUrl`<sup>Optional</sup> <a name="IconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.iconUrl"></a>

```go
IconUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalAuthenticationEnabled`<sup>Optional</sup> <a name="LocalAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.localAuthenticationEnabled"></a>

```go
LocalAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}.

---

##### `LuisAppIds`<sup>Optional</sup> <a name="LuisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds"></a>

```go
LuisAppIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}.

---

##### `LuisKey`<sup>Optional</sup> <a name="LuisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey"></a>

```go
LuisKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}.

---

##### `MicrosoftAppMsiId`<sup>Optional</sup> <a name="MicrosoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId"></a>

```go
MicrosoftAppMsiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}.

---

##### `MicrosoftAppTenantId`<sup>Optional</sup> <a name="MicrosoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId"></a>

```go
MicrosoftAppTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}.

---

##### `MicrosoftAppType`<sup>Optional</sup> <a name="MicrosoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType"></a>

```go
MicrosoftAppType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}.

---

##### `StreamingEndpointEnabled`<sup>Optional</sup> <a name="StreamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled"></a>

```go
StreamingEndpointEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts"></a>

```go
Timeouts BotServiceAzureBotTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#timeouts BotServiceAzureBot#timeouts}

---

### BotServiceAzureBotTimeouts <a name="BotServiceAzureBotTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botserviceazurebot"

&botserviceazurebot.BotServiceAzureBotTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotServiceAzureBotTimeoutsOutputReference <a name="BotServiceAzureBotTimeoutsOutputReference" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/botserviceazurebot"

botserviceazurebot.NewBotServiceAzureBotTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BotServiceAzureBotTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



