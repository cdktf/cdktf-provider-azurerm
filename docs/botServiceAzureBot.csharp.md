# `azurerm_bot_service_azure_bot`

Refer to the Terraform Registory for docs: [`azurerm_bot_service_azure_bot`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot).

# `botServiceAzureBot` Submodule <a name="`botServiceAzureBot` Submodule" id="@cdktf/provider-azurerm.botServiceAzureBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotServiceAzureBot <a name="BotServiceAzureBot" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot azurerm_bot_service_azure_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BotServiceAzureBot(Construct Scope, string Id, BotServiceAzureBotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig">BotServiceAzureBotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey">ResetDeveloperAppInsightsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId">ResetDeveloperAppInsightsApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey">ResetDeveloperAppInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId">ResetId</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts"></a>

```csharp
private void PutTimeouts(BotServiceAzureBotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

---

##### `ResetDeveloperAppInsightsApiKey` <a name="ResetDeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey"></a>

```csharp
private void ResetDeveloperAppInsightsApiKey()
```

##### `ResetDeveloperAppInsightsApplicationId` <a name="ResetDeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId"></a>

```csharp
private void ResetDeveloperAppInsightsApplicationId()
```

##### `ResetDeveloperAppInsightsKey` <a name="ResetDeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey"></a>

```csharp
private void ResetDeveloperAppInsightsKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLuisAppIds` <a name="ResetLuisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds"></a>

```csharp
private void ResetLuisAppIds()
```

##### `ResetLuisKey` <a name="ResetLuisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey"></a>

```csharp
private void ResetLuisKey()
```

##### `ResetMicrosoftAppMsiId` <a name="ResetMicrosoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId"></a>

```csharp
private void ResetMicrosoftAppMsiId()
```

##### `ResetMicrosoftAppTenantId` <a name="ResetMicrosoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId"></a>

```csharp
private void ResetMicrosoftAppTenantId()
```

##### `ResetMicrosoftAppType` <a name="ResetMicrosoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType"></a>

```csharp
private void ResetMicrosoftAppType()
```

##### `ResetStreamingEndpointEnabled` <a name="ResetStreamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled"></a>

```csharp
private void ResetStreamingEndpointEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BotServiceAzureBot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BotServiceAzureBot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BotServiceAzureBot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput">DeveloperAppInsightsApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput">DeveloperAppInsightsApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput">DeveloperAppInsightsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput">LuisAppIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput">LuisKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput">MicrosoftAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput">MicrosoftAppMsiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput">MicrosoftAppTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput">MicrosoftAppTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput">StreamingEndpointEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds">LuisAppIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey">LuisKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId">MicrosoftAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId">MicrosoftAppMsiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId">MicrosoftAppTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType">MicrosoftAppType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled">StreamingEndpointEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts"></a>

```csharp
public BotServiceAzureBotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a>

---

##### `DeveloperAppInsightsApiKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput"></a>

```csharp
public string DeveloperAppInsightsApiKeyInput { get; }
```

- *Type:* string

---

##### `DeveloperAppInsightsApplicationIdInput`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput"></a>

```csharp
public string DeveloperAppInsightsApplicationIdInput { get; }
```

- *Type:* string

---

##### `DeveloperAppInsightsKeyInput`<sup>Optional</sup> <a name="DeveloperAppInsightsKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput"></a>

```csharp
public string DeveloperAppInsightsKeyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LuisAppIdsInput`<sup>Optional</sup> <a name="LuisAppIdsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput"></a>

```csharp
public string[] LuisAppIdsInput { get; }
```

- *Type:* string[]

---

##### `LuisKeyInput`<sup>Optional</sup> <a name="LuisKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput"></a>

```csharp
public string LuisKeyInput { get; }
```

- *Type:* string

---

##### `MicrosoftAppIdInput`<sup>Optional</sup> <a name="MicrosoftAppIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput"></a>

```csharp
public string MicrosoftAppIdInput { get; }
```

- *Type:* string

---

##### `MicrosoftAppMsiIdInput`<sup>Optional</sup> <a name="MicrosoftAppMsiIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput"></a>

```csharp
public string MicrosoftAppMsiIdInput { get; }
```

- *Type:* string

---

##### `MicrosoftAppTenantIdInput`<sup>Optional</sup> <a name="MicrosoftAppTenantIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput"></a>

```csharp
public string MicrosoftAppTenantIdInput { get; }
```

- *Type:* string

---

##### `MicrosoftAppTypeInput`<sup>Optional</sup> <a name="MicrosoftAppTypeInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput"></a>

```csharp
public string MicrosoftAppTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `StreamingEndpointEnabledInput`<sup>Optional</sup> <a name="StreamingEndpointEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput"></a>

```csharp
public object StreamingEndpointEnabledInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeveloperAppInsightsApiKey`<sup>Required</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey"></a>

```csharp
public string DeveloperAppInsightsApiKey { get; }
```

- *Type:* string

---

##### `DeveloperAppInsightsApplicationId`<sup>Required</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId"></a>

```csharp
public string DeveloperAppInsightsApplicationId { get; }
```

- *Type:* string

---

##### `DeveloperAppInsightsKey`<sup>Required</sup> <a name="DeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey"></a>

```csharp
public string DeveloperAppInsightsKey { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LuisAppIds`<sup>Required</sup> <a name="LuisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds"></a>

```csharp
public string[] LuisAppIds { get; }
```

- *Type:* string[]

---

##### `LuisKey`<sup>Required</sup> <a name="LuisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey"></a>

```csharp
public string LuisKey { get; }
```

- *Type:* string

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId"></a>

```csharp
public string MicrosoftAppId { get; }
```

- *Type:* string

---

##### `MicrosoftAppMsiId`<sup>Required</sup> <a name="MicrosoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId"></a>

```csharp
public string MicrosoftAppMsiId { get; }
```

- *Type:* string

---

##### `MicrosoftAppTenantId`<sup>Required</sup> <a name="MicrosoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId"></a>

```csharp
public string MicrosoftAppTenantId { get; }
```

- *Type:* string

---

##### `MicrosoftAppType`<sup>Required</sup> <a name="MicrosoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType"></a>

```csharp
public string MicrosoftAppType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `StreamingEndpointEnabled`<sup>Required</sup> <a name="StreamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled"></a>

```csharp
public object StreamingEndpointEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BotServiceAzureBotConfig <a name="BotServiceAzureBotConfig" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BotServiceAzureBotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string MicrosoftAppId,
    string Name,
    string ResourceGroupName,
    string Sku,
    string DeveloperAppInsightsApiKey = null,
    string DeveloperAppInsightsApplicationId = null,
    string DeveloperAppInsightsKey = null,
    string DisplayName = null,
    string Endpoint = null,
    string Id = null,
    string[] LuisAppIds = null,
    string LuisKey = null,
    string MicrosoftAppMsiId = null,
    string MicrosoftAppTenantId = null,
    string MicrosoftAppType = null,
    object StreamingEndpointEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BotServiceAzureBotTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId">MicrosoftAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey">DeveloperAppInsightsApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId">DeveloperAppInsightsApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey">DeveloperAppInsightsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds">LuisAppIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey">LuisKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId">MicrosoftAppMsiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId">MicrosoftAppTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType">MicrosoftAppType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled">StreamingEndpointEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}.

---

##### `MicrosoftAppId`<sup>Required</sup> <a name="MicrosoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId"></a>

```csharp
public string MicrosoftAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}.

---

##### `DeveloperAppInsightsApiKey`<sup>Optional</sup> <a name="DeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey"></a>

```csharp
public string DeveloperAppInsightsApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}.

---

##### `DeveloperAppInsightsApplicationId`<sup>Optional</sup> <a name="DeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId"></a>

```csharp
public string DeveloperAppInsightsApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}.

---

##### `DeveloperAppInsightsKey`<sup>Optional</sup> <a name="DeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey"></a>

```csharp
public string DeveloperAppInsightsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LuisAppIds`<sup>Optional</sup> <a name="LuisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds"></a>

```csharp
public string[] LuisAppIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}.

---

##### `LuisKey`<sup>Optional</sup> <a name="LuisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey"></a>

```csharp
public string LuisKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}.

---

##### `MicrosoftAppMsiId`<sup>Optional</sup> <a name="MicrosoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId"></a>

```csharp
public string MicrosoftAppMsiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}.

---

##### `MicrosoftAppTenantId`<sup>Optional</sup> <a name="MicrosoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId"></a>

```csharp
public string MicrosoftAppTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}.

---

##### `MicrosoftAppType`<sup>Optional</sup> <a name="MicrosoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType"></a>

```csharp
public string MicrosoftAppType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}.

---

##### `StreamingEndpointEnabled`<sup>Optional</sup> <a name="StreamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled"></a>

```csharp
public object StreamingEndpointEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts"></a>

```csharp
public BotServiceAzureBotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#timeouts BotServiceAzureBot#timeouts}

---

### BotServiceAzureBotTimeouts <a name="BotServiceAzureBotTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BotServiceAzureBotTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotServiceAzureBotTimeoutsOutputReference <a name="BotServiceAzureBotTimeoutsOutputReference" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BotServiceAzureBotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



