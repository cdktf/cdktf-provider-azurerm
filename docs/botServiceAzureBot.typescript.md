# `botServiceAzureBot` Submodule <a name="`botServiceAzureBot` Submodule" id="@cdktf/provider-azurerm.botServiceAzureBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotServiceAzureBot <a name="BotServiceAzureBot" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot azurerm_bot_service_azure_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer"></a>

```typescript
import { botServiceAzureBot } from '@cdktf/provider-azurerm'

new botServiceAzureBot.BotServiceAzureBot(scope: Construct, id: string, config: BotServiceAzureBotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig">BotServiceAzureBotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig">BotServiceAzureBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetCmkKeyVaultKeyUrl">resetCmkKeyVaultKeyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey">resetDeveloperAppInsightsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId">resetDeveloperAppInsightsApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey">resetDeveloperAppInsightsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLocalAuthenticationEnabled">resetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds">resetLuisAppIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey">resetLuisKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId">resetMicrosoftAppMsiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId">resetMicrosoftAppTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType">resetMicrosoftAppType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled">resetStreamingEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts"></a>

```typescript
public putTimeouts(value: BotServiceAzureBotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

---

##### `resetCmkKeyVaultKeyUrl` <a name="resetCmkKeyVaultKeyUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetCmkKeyVaultKeyUrl"></a>

```typescript
public resetCmkKeyVaultKeyUrl(): void
```

##### `resetDeveloperAppInsightsApiKey` <a name="resetDeveloperAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApiKey"></a>

```typescript
public resetDeveloperAppInsightsApiKey(): void
```

##### `resetDeveloperAppInsightsApplicationId` <a name="resetDeveloperAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsApplicationId"></a>

```typescript
public resetDeveloperAppInsightsApplicationId(): void
```

##### `resetDeveloperAppInsightsKey` <a name="resetDeveloperAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDeveloperAppInsightsKey"></a>

```typescript
public resetDeveloperAppInsightsKey(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetIconUrl` <a name="resetIconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetIconUrl"></a>

```typescript
public resetIconUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalAuthenticationEnabled` <a name="resetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLocalAuthenticationEnabled"></a>

```typescript
public resetLocalAuthenticationEnabled(): void
```

##### `resetLuisAppIds` <a name="resetLuisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisAppIds"></a>

```typescript
public resetLuisAppIds(): void
```

##### `resetLuisKey` <a name="resetLuisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetLuisKey"></a>

```typescript
public resetLuisKey(): void
```

##### `resetMicrosoftAppMsiId` <a name="resetMicrosoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppMsiId"></a>

```typescript
public resetMicrosoftAppMsiId(): void
```

##### `resetMicrosoftAppTenantId` <a name="resetMicrosoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppTenantId"></a>

```typescript
public resetMicrosoftAppTenantId(): void
```

##### `resetMicrosoftAppType` <a name="resetMicrosoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetMicrosoftAppType"></a>

```typescript
public resetMicrosoftAppType(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetStreamingEndpointEnabled` <a name="resetStreamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetStreamingEndpointEnabled"></a>

```typescript
public resetStreamingEndpointEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BotServiceAzureBot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isConstruct"></a>

```typescript
import { botServiceAzureBot } from '@cdktf/provider-azurerm'

botServiceAzureBot.BotServiceAzureBot.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement"></a>

```typescript
import { botServiceAzureBot } from '@cdktf/provider-azurerm'

botServiceAzureBot.BotServiceAzureBot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource"></a>

```typescript
import { botServiceAzureBot } from '@cdktf/provider-azurerm'

botServiceAzureBot.BotServiceAzureBot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport"></a>

```typescript
import { botServiceAzureBot } from '@cdktf/provider-azurerm'

botServiceAzureBot.BotServiceAzureBot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BotServiceAzureBot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BotServiceAzureBot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BotServiceAzureBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BotServiceAzureBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrlInput">cmkKeyVaultKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput">developerAppInsightsApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput">developerAppInsightsApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput">developerAppInsightsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrlInput">iconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabledInput">localAuthenticationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput">luisAppIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput">luisKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput">microsoftAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput">microsoftAppMsiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput">microsoftAppTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput">microsoftAppTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput">streamingEndpointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrl">cmkKeyVaultKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey">developerAppInsightsApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId">developerAppInsightsApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey">developerAppInsightsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrl">iconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds">luisAppIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey">luisKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId">microsoftAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId">microsoftAppMsiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId">microsoftAppTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType">microsoftAppType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled">streamingEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeouts"></a>

```typescript
public readonly timeouts: BotServiceAzureBotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference">BotServiceAzureBotTimeoutsOutputReference</a>

---

##### `cmkKeyVaultKeyUrlInput`<sup>Optional</sup> <a name="cmkKeyVaultKeyUrlInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrlInput"></a>

```typescript
public readonly cmkKeyVaultKeyUrlInput: string;
```

- *Type:* string

---

##### `developerAppInsightsApiKeyInput`<sup>Optional</sup> <a name="developerAppInsightsApiKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKeyInput"></a>

```typescript
public readonly developerAppInsightsApiKeyInput: string;
```

- *Type:* string

---

##### `developerAppInsightsApplicationIdInput`<sup>Optional</sup> <a name="developerAppInsightsApplicationIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationIdInput"></a>

```typescript
public readonly developerAppInsightsApplicationIdInput: string;
```

- *Type:* string

---

##### `developerAppInsightsKeyInput`<sup>Optional</sup> <a name="developerAppInsightsKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKeyInput"></a>

```typescript
public readonly developerAppInsightsKeyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrlInput"></a>

```typescript
public readonly iconUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localAuthenticationEnabledInput`<sup>Optional</sup> <a name="localAuthenticationEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabledInput"></a>

```typescript
public readonly localAuthenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `luisAppIdsInput`<sup>Optional</sup> <a name="luisAppIdsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIdsInput"></a>

```typescript
public readonly luisAppIdsInput: string[];
```

- *Type:* string[]

---

##### `luisKeyInput`<sup>Optional</sup> <a name="luisKeyInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKeyInput"></a>

```typescript
public readonly luisKeyInput: string;
```

- *Type:* string

---

##### `microsoftAppIdInput`<sup>Optional</sup> <a name="microsoftAppIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppIdInput"></a>

```typescript
public readonly microsoftAppIdInput: string;
```

- *Type:* string

---

##### `microsoftAppMsiIdInput`<sup>Optional</sup> <a name="microsoftAppMsiIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiIdInput"></a>

```typescript
public readonly microsoftAppMsiIdInput: string;
```

- *Type:* string

---

##### `microsoftAppTenantIdInput`<sup>Optional</sup> <a name="microsoftAppTenantIdInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantIdInput"></a>

```typescript
public readonly microsoftAppTenantIdInput: string;
```

- *Type:* string

---

##### `microsoftAppTypeInput`<sup>Optional</sup> <a name="microsoftAppTypeInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTypeInput"></a>

```typescript
public readonly microsoftAppTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `streamingEndpointEnabledInput`<sup>Optional</sup> <a name="streamingEndpointEnabledInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabledInput"></a>

```typescript
public readonly streamingEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BotServiceAzureBotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

---

##### `cmkKeyVaultKeyUrl`<sup>Required</sup> <a name="cmkKeyVaultKeyUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.cmkKeyVaultKeyUrl"></a>

```typescript
public readonly cmkKeyVaultKeyUrl: string;
```

- *Type:* string

---

##### `developerAppInsightsApiKey`<sup>Required</sup> <a name="developerAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApiKey"></a>

```typescript
public readonly developerAppInsightsApiKey: string;
```

- *Type:* string

---

##### `developerAppInsightsApplicationId`<sup>Required</sup> <a name="developerAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsApplicationId"></a>

```typescript
public readonly developerAppInsightsApplicationId: string;
```

- *Type:* string

---

##### `developerAppInsightsKey`<sup>Required</sup> <a name="developerAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.developerAppInsightsKey"></a>

```typescript
public readonly developerAppInsightsKey: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localAuthenticationEnabled`<sup>Required</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.localAuthenticationEnabled"></a>

```typescript
public readonly localAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `luisAppIds`<sup>Required</sup> <a name="luisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisAppIds"></a>

```typescript
public readonly luisAppIds: string[];
```

- *Type:* string[]

---

##### `luisKey`<sup>Required</sup> <a name="luisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.luisKey"></a>

```typescript
public readonly luisKey: string;
```

- *Type:* string

---

##### `microsoftAppId`<sup>Required</sup> <a name="microsoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppId"></a>

```typescript
public readonly microsoftAppId: string;
```

- *Type:* string

---

##### `microsoftAppMsiId`<sup>Required</sup> <a name="microsoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppMsiId"></a>

```typescript
public readonly microsoftAppMsiId: string;
```

- *Type:* string

---

##### `microsoftAppTenantId`<sup>Required</sup> <a name="microsoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppTenantId"></a>

```typescript
public readonly microsoftAppTenantId: string;
```

- *Type:* string

---

##### `microsoftAppType`<sup>Required</sup> <a name="microsoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.microsoftAppType"></a>

```typescript
public readonly microsoftAppType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `streamingEndpointEnabled`<sup>Required</sup> <a name="streamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.streamingEndpointEnabled"></a>

```typescript
public readonly streamingEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BotServiceAzureBotConfig <a name="BotServiceAzureBotConfig" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.Initializer"></a>

```typescript
import { botServiceAzureBot } from '@cdktf/provider-azurerm'

const botServiceAzureBotConfig: botServiceAzureBot.BotServiceAzureBotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId">microsoftAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.cmkKeyVaultKeyUrl">cmkKeyVaultKeyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey">developerAppInsightsApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId">developerAppInsightsApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey">developerAppInsightsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.iconUrl">iconUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds">luisAppIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey">luisKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId">microsoftAppMsiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId">microsoftAppTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType">microsoftAppType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled">streamingEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}.

---

##### `microsoftAppId`<sup>Required</sup> <a name="microsoftAppId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppId"></a>

```typescript
public readonly microsoftAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}.

---

##### `cmkKeyVaultKeyUrl`<sup>Optional</sup> <a name="cmkKeyVaultKeyUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.cmkKeyVaultKeyUrl"></a>

```typescript
public readonly cmkKeyVaultKeyUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#cmk_key_vault_key_url BotServiceAzureBot#cmk_key_vault_key_url}.

---

##### `developerAppInsightsApiKey`<sup>Optional</sup> <a name="developerAppInsightsApiKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApiKey"></a>

```typescript
public readonly developerAppInsightsApiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}.

---

##### `developerAppInsightsApplicationId`<sup>Optional</sup> <a name="developerAppInsightsApplicationId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsApplicationId"></a>

```typescript
public readonly developerAppInsightsApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}.

---

##### `developerAppInsightsKey`<sup>Optional</sup> <a name="developerAppInsightsKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.developerAppInsightsKey"></a>

```typescript
public readonly developerAppInsightsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}.

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#icon_url BotServiceAzureBot#icon_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.localAuthenticationEnabled"></a>

```typescript
public readonly localAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#local_authentication_enabled BotServiceAzureBot#local_authentication_enabled}.

---

##### `luisAppIds`<sup>Optional</sup> <a name="luisAppIds" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisAppIds"></a>

```typescript
public readonly luisAppIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}.

---

##### `luisKey`<sup>Optional</sup> <a name="luisKey" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.luisKey"></a>

```typescript
public readonly luisKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}.

---

##### `microsoftAppMsiId`<sup>Optional</sup> <a name="microsoftAppMsiId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppMsiId"></a>

```typescript
public readonly microsoftAppMsiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}.

---

##### `microsoftAppTenantId`<sup>Optional</sup> <a name="microsoftAppTenantId" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppTenantId"></a>

```typescript
public readonly microsoftAppTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}.

---

##### `microsoftAppType`<sup>Optional</sup> <a name="microsoftAppType" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.microsoftAppType"></a>

```typescript
public readonly microsoftAppType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#public_network_access_enabled BotServiceAzureBot#public_network_access_enabled}.

---

##### `streamingEndpointEnabled`<sup>Optional</sup> <a name="streamingEndpointEnabled" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.streamingEndpointEnabled"></a>

```typescript
public readonly streamingEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BotServiceAzureBotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#timeouts BotServiceAzureBot#timeouts}

---

### BotServiceAzureBotTimeouts <a name="BotServiceAzureBotTimeouts" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.Initializer"></a>

```typescript
import { botServiceAzureBot } from '@cdktf/provider-azurerm'

const botServiceAzureBotTimeouts: botServiceAzureBot.BotServiceAzureBotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotServiceAzureBotTimeoutsOutputReference <a name="BotServiceAzureBotTimeoutsOutputReference" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer"></a>

```typescript
import { botServiceAzureBot } from '@cdktf/provider-azurerm'

new botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BotServiceAzureBotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.botServiceAzureBot.BotServiceAzureBotTimeouts">BotServiceAzureBotTimeouts</a>

---



