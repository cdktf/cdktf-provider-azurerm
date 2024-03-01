# `springCloudService` Submodule <a name="`springCloudService` Submodule" id="@cdktf/provider-azurerm.springCloudService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudService <a name="SpringCloudService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service azurerm_spring_cloud_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudService(scope: Construct, id: string, config: SpringCloudServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig">SpringCloudServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig">SpringCloudServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting">putConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry">putContainerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService">putDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace">putMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace">putTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetBuildAgentPoolSize">resetBuildAgentPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetConfigServerGitSetting">resetConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetContainerRegistry">resetContainerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetDefaultBuildService">resetDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetLogStreamPublicEndpointEnabled">resetLogStreamPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetManagedEnvironmentId">resetManagedEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetMarketplace">resetMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetServiceRegistryEnabled">resetServiceRegistryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuName">resetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuTier">resetSkuTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTrace">resetTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigServerGitSetting` <a name="putConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting"></a>

```typescript
public putConfigServerGitSetting(value: SpringCloudServiceConfigServerGitSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---

##### `putContainerRegistry` <a name="putContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry"></a>

```typescript
public putContainerRegistry(value: IResolvable | SpringCloudServiceContainerRegistry[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a>[]

---

##### `putDefaultBuildService` <a name="putDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService"></a>

```typescript
public putDefaultBuildService(value: SpringCloudServiceDefaultBuildService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---

##### `putMarketplace` <a name="putMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace"></a>

```typescript
public putMarketplace(value: SpringCloudServiceMarketplace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork"></a>

```typescript
public putNetwork(value: SpringCloudServiceNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a>

---

##### `putTrace` <a name="putTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace"></a>

```typescript
public putTrace(value: SpringCloudServiceTrace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---

##### `resetBuildAgentPoolSize` <a name="resetBuildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetBuildAgentPoolSize"></a>

```typescript
public resetBuildAgentPoolSize(): void
```

##### `resetConfigServerGitSetting` <a name="resetConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetConfigServerGitSetting"></a>

```typescript
public resetConfigServerGitSetting(): void
```

##### `resetContainerRegistry` <a name="resetContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetContainerRegistry"></a>

```typescript
public resetContainerRegistry(): void
```

##### `resetDefaultBuildService` <a name="resetDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetDefaultBuildService"></a>

```typescript
public resetDefaultBuildService(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogStreamPublicEndpointEnabled` <a name="resetLogStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetLogStreamPublicEndpointEnabled"></a>

```typescript
public resetLogStreamPublicEndpointEnabled(): void
```

##### `resetManagedEnvironmentId` <a name="resetManagedEnvironmentId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetManagedEnvironmentId"></a>

```typescript
public resetManagedEnvironmentId(): void
```

##### `resetMarketplace` <a name="resetMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetMarketplace"></a>

```typescript
public resetMarketplace(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetServiceRegistryEnabled` <a name="resetServiceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetServiceRegistryEnabled"></a>

```typescript
public resetServiceRegistryEnabled(): void
```

##### `resetSkuName` <a name="resetSkuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuName"></a>

```typescript
public resetSkuName(): void
```

##### `resetSkuTier` <a name="resetSkuTier" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuTier"></a>

```typescript
public resetSkuTier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrace` <a name="resetTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTrace"></a>

```typescript
public resetTrace(): void
```

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetZoneRedundant"></a>

```typescript
public resetZoneRedundant(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

springCloudService.SpringCloudService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

springCloudService.SpringCloudService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

springCloudService.SpringCloudService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

springCloudService.SpringCloudService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSetting">configServerGitSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference">SpringCloudServiceConfigServerGitSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistry">containerRegistry</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList">SpringCloudServiceContainerRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildService">defaultBuildService</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference">SpringCloudServiceDefaultBuildServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplace">marketplace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference">SpringCloudServiceMarketplaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference">SpringCloudServiceNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.outboundPublicIpAddresses">outboundPublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.requiredNetworkTrafficRules">requiredNetworkTrafficRules</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList">SpringCloudServiceRequiredNetworkTrafficRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryId">serviceRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference">SpringCloudServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.trace">trace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference">SpringCloudServiceTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSizeInput">buildAgentPoolSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSettingInput">configServerGitSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistryInput">containerRegistryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildServiceInput">defaultBuildServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabledInput">logStreamPublicEndpointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.managedEnvironmentIdInput">managedEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplaceInput">marketplaceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabledInput">serviceRegistryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuTierInput">skuTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.traceInput">traceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSize">buildAgentPoolSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabled">logStreamPublicEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.managedEnvironmentId">managedEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabled">serviceRegistryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuTier">skuTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configServerGitSetting`<sup>Required</sup> <a name="configServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSetting"></a>

```typescript
public readonly configServerGitSetting: SpringCloudServiceConfigServerGitSettingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference">SpringCloudServiceConfigServerGitSettingOutputReference</a>

---

##### `containerRegistry`<sup>Required</sup> <a name="containerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistry"></a>

```typescript
public readonly containerRegistry: SpringCloudServiceContainerRegistryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList">SpringCloudServiceContainerRegistryList</a>

---

##### `defaultBuildService`<sup>Required</sup> <a name="defaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildService"></a>

```typescript
public readonly defaultBuildService: SpringCloudServiceDefaultBuildServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference">SpringCloudServiceDefaultBuildServiceOutputReference</a>

---

##### `marketplace`<sup>Required</sup> <a name="marketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplace"></a>

```typescript
public readonly marketplace: SpringCloudServiceMarketplaceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference">SpringCloudServiceMarketplaceOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.network"></a>

```typescript
public readonly network: SpringCloudServiceNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference">SpringCloudServiceNetworkOutputReference</a>

---

##### `outboundPublicIpAddresses`<sup>Required</sup> <a name="outboundPublicIpAddresses" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.outboundPublicIpAddresses"></a>

```typescript
public readonly outboundPublicIpAddresses: string[];
```

- *Type:* string[]

---

##### `requiredNetworkTrafficRules`<sup>Required</sup> <a name="requiredNetworkTrafficRules" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.requiredNetworkTrafficRules"></a>

```typescript
public readonly requiredNetworkTrafficRules: SpringCloudServiceRequiredNetworkTrafficRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList">SpringCloudServiceRequiredNetworkTrafficRulesList</a>

---

##### `serviceRegistryId`<sup>Required</sup> <a name="serviceRegistryId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryId"></a>

```typescript
public readonly serviceRegistryId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference">SpringCloudServiceTimeoutsOutputReference</a>

---

##### `trace`<sup>Required</sup> <a name="trace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.trace"></a>

```typescript
public readonly trace: SpringCloudServiceTraceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference">SpringCloudServiceTraceOutputReference</a>

---

##### `buildAgentPoolSizeInput`<sup>Optional</sup> <a name="buildAgentPoolSizeInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSizeInput"></a>

```typescript
public readonly buildAgentPoolSizeInput: string;
```

- *Type:* string

---

##### `configServerGitSettingInput`<sup>Optional</sup> <a name="configServerGitSettingInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSettingInput"></a>

```typescript
public readonly configServerGitSettingInput: SpringCloudServiceConfigServerGitSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---

##### `containerRegistryInput`<sup>Optional</sup> <a name="containerRegistryInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistryInput"></a>

```typescript
public readonly containerRegistryInput: IResolvable | SpringCloudServiceContainerRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a>[]

---

##### `defaultBuildServiceInput`<sup>Optional</sup> <a name="defaultBuildServiceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildServiceInput"></a>

```typescript
public readonly defaultBuildServiceInput: SpringCloudServiceDefaultBuildService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logStreamPublicEndpointEnabledInput`<sup>Optional</sup> <a name="logStreamPublicEndpointEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabledInput"></a>

```typescript
public readonly logStreamPublicEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedEnvironmentIdInput`<sup>Optional</sup> <a name="managedEnvironmentIdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.managedEnvironmentIdInput"></a>

```typescript
public readonly managedEnvironmentIdInput: string;
```

- *Type:* string

---

##### `marketplaceInput`<sup>Optional</sup> <a name="marketplaceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplaceInput"></a>

```typescript
public readonly marketplaceInput: SpringCloudServiceMarketplace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.networkInput"></a>

```typescript
public readonly networkInput: SpringCloudServiceNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceRegistryEnabledInput`<sup>Optional</sup> <a name="serviceRegistryEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabledInput"></a>

```typescript
public readonly serviceRegistryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `skuTierInput`<sup>Optional</sup> <a name="skuTierInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuTierInput"></a>

```typescript
public readonly skuTierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a>

---

##### `traceInput`<sup>Optional</sup> <a name="traceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.traceInput"></a>

```typescript
public readonly traceInput: SpringCloudServiceTrace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundantInput"></a>

```typescript
public readonly zoneRedundantInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buildAgentPoolSize`<sup>Required</sup> <a name="buildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSize"></a>

```typescript
public readonly buildAgentPoolSize: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logStreamPublicEndpointEnabled`<sup>Required</sup> <a name="logStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabled"></a>

```typescript
public readonly logStreamPublicEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedEnvironmentId`<sup>Required</sup> <a name="managedEnvironmentId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.managedEnvironmentId"></a>

```typescript
public readonly managedEnvironmentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceRegistryEnabled`<sup>Required</sup> <a name="serviceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabled"></a>

```typescript
public readonly serviceRegistryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `skuTier`<sup>Required</sup> <a name="skuTier" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuTier"></a>

```typescript
public readonly skuTier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudServiceConfig <a name="SpringCloudServiceConfig" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceConfig: springCloudService.SpringCloudServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#location SpringCloudService#location}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#resource_group_name SpringCloudService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.buildAgentPoolSize">buildAgentPoolSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#build_agent_pool_size SpringCloudService#build_agent_pool_size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.configServerGitSetting">configServerGitSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | config_server_git_setting block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.containerRegistry">containerRegistry</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a>[]</code> | container_registry block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.defaultBuildService">defaultBuildService</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | default_build_service block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#id SpringCloudService#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.logStreamPublicEndpointEnabled">logStreamPublicEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#log_stream_public_endpoint_enabled SpringCloudService#log_stream_public_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.managedEnvironmentId">managedEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#managed_environment_id SpringCloudService#managed_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.marketplace">marketplace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | marketplace block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.serviceRegistryEnabled">serviceRegistryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#service_registry_enabled SpringCloudService#service_registry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#sku_name SpringCloudService#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuTier">skuTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#sku_tier SpringCloudService#sku_tier}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#tags SpringCloudService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.trace">trace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | trace block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#zone_redundant SpringCloudService#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#location SpringCloudService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#resource_group_name SpringCloudService#resource_group_name}.

---

##### `buildAgentPoolSize`<sup>Optional</sup> <a name="buildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.buildAgentPoolSize"></a>

```typescript
public readonly buildAgentPoolSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#build_agent_pool_size SpringCloudService#build_agent_pool_size}.

---

##### `configServerGitSetting`<sup>Optional</sup> <a name="configServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.configServerGitSetting"></a>

```typescript
public readonly configServerGitSetting: SpringCloudServiceConfigServerGitSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

config_server_git_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#config_server_git_setting SpringCloudService#config_server_git_setting}

---

##### `containerRegistry`<sup>Optional</sup> <a name="containerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.containerRegistry"></a>

```typescript
public readonly containerRegistry: IResolvable | SpringCloudServiceContainerRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a>[]

container_registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#container_registry SpringCloudService#container_registry}

---

##### `defaultBuildService`<sup>Optional</sup> <a name="defaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.defaultBuildService"></a>

```typescript
public readonly defaultBuildService: SpringCloudServiceDefaultBuildService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

default_build_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#default_build_service SpringCloudService#default_build_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#id SpringCloudService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logStreamPublicEndpointEnabled`<sup>Optional</sup> <a name="logStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.logStreamPublicEndpointEnabled"></a>

```typescript
public readonly logStreamPublicEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#log_stream_public_endpoint_enabled SpringCloudService#log_stream_public_endpoint_enabled}.

---

##### `managedEnvironmentId`<sup>Optional</sup> <a name="managedEnvironmentId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.managedEnvironmentId"></a>

```typescript
public readonly managedEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#managed_environment_id SpringCloudService#managed_environment_id}.

---

##### `marketplace`<sup>Optional</sup> <a name="marketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.marketplace"></a>

```typescript
public readonly marketplace: SpringCloudServiceMarketplace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#marketplace SpringCloudService#marketplace}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.network"></a>

```typescript
public readonly network: SpringCloudServiceNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#network SpringCloudService#network}

---

##### `serviceRegistryEnabled`<sup>Optional</sup> <a name="serviceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.serviceRegistryEnabled"></a>

```typescript
public readonly serviceRegistryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#service_registry_enabled SpringCloudService#service_registry_enabled}.

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#sku_name SpringCloudService#sku_name}.

---

##### `skuTier`<sup>Optional</sup> <a name="skuTier" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuTier"></a>

```typescript
public readonly skuTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#sku_tier SpringCloudService#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#tags SpringCloudService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#timeouts SpringCloudService#timeouts}

---

##### `trace`<sup>Optional</sup> <a name="trace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.trace"></a>

```typescript
public readonly trace: SpringCloudServiceTrace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#trace SpringCloudService#trace}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#zone_redundant SpringCloudService#zone_redundant}.

---

### SpringCloudServiceConfigServerGitSetting <a name="SpringCloudServiceConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceConfigServerGitSetting: springCloudService.SpringCloudServiceConfigServerGitSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.httpBasicAuth">httpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | http_basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#label SpringCloudService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.repository">repository</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a>[]</code> | repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.searchPaths">searchPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | ssh_auth block. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}.

---

##### `httpBasicAuth`<sup>Optional</sup> <a name="httpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.httpBasicAuth"></a>

```typescript
public readonly httpBasicAuth: SpringCloudServiceConfigServerGitSettingHttpBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

http_basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#http_basic_auth SpringCloudService#http_basic_auth}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#label SpringCloudService#label}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.repository"></a>

```typescript
public readonly repository: IResolvable | SpringCloudServiceConfigServerGitSettingRepository[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a>[]

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#repository SpringCloudService#repository}

---

##### `searchPaths`<sup>Optional</sup> <a name="searchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.searchPaths"></a>

```typescript
public readonly searchPaths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}.

---

##### `sshAuth`<sup>Optional</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.sshAuth"></a>

```typescript
public readonly sshAuth: SpringCloudServiceConfigServerGitSettingSshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#ssh_auth SpringCloudService#ssh_auth}

---

### SpringCloudServiceConfigServerGitSettingHttpBasicAuth <a name="SpringCloudServiceConfigServerGitSettingHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceConfigServerGitSettingHttpBasicAuth: springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceConfigServerGitSettingRepository <a name="SpringCloudServiceConfigServerGitSettingRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceConfigServerGitSettingRepository: springCloudService.SpringCloudServiceConfigServerGitSettingRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.httpBasicAuth">httpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | http_basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#label SpringCloudService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.pattern">pattern</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#pattern SpringCloudService#pattern}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.searchPaths">searchPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | ssh_auth block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}.

---

##### `httpBasicAuth`<sup>Optional</sup> <a name="httpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.httpBasicAuth"></a>

```typescript
public readonly httpBasicAuth: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

http_basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#http_basic_auth SpringCloudService#http_basic_auth}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#label SpringCloudService#label}.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.pattern"></a>

```typescript
public readonly pattern: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#pattern SpringCloudService#pattern}.

---

##### `searchPaths`<sup>Optional</sup> <a name="searchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.searchPaths"></a>

```typescript
public readonly searchPaths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}.

---

##### `sshAuth`<sup>Optional</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.sshAuth"></a>

```typescript
public readonly sshAuth: SpringCloudServiceConfigServerGitSettingRepositorySshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#ssh_auth SpringCloudService#ssh_auth}

---

### SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth <a name="SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth: springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceConfigServerGitSettingRepositorySshAuth <a name="SpringCloudServiceConfigServerGitSettingRepositorySshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceConfigServerGitSettingRepositorySshAuth: springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKey">hostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.strictHostKeyCheckingEnabled">strictHostKeyCheckingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}.

---

##### `hostKey`<sup>Optional</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}.

---

##### `hostKeyAlgorithm`<sup>Optional</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKeyAlgorithm"></a>

```typescript
public readonly hostKeyAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}.

---

##### `strictHostKeyCheckingEnabled`<sup>Optional</sup> <a name="strictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.strictHostKeyCheckingEnabled"></a>

```typescript
public readonly strictHostKeyCheckingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}.

---

### SpringCloudServiceConfigServerGitSettingSshAuth <a name="SpringCloudServiceConfigServerGitSettingSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceConfigServerGitSettingSshAuth: springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKey">hostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.strictHostKeyCheckingEnabled">strictHostKeyCheckingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}.

---

##### `hostKey`<sup>Optional</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}.

---

##### `hostKeyAlgorithm`<sup>Optional</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKeyAlgorithm"></a>

```typescript
public readonly hostKeyAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}.

---

##### `strictHostKeyCheckingEnabled`<sup>Optional</sup> <a name="strictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.strictHostKeyCheckingEnabled"></a>

```typescript
public readonly strictHostKeyCheckingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}.

---

### SpringCloudServiceContainerRegistry <a name="SpringCloudServiceContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceContainerRegistry: springCloudService.SpringCloudServiceContainerRegistry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.server">server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#server SpringCloudService#server}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#server SpringCloudService#server}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceDefaultBuildService <a name="SpringCloudServiceDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceDefaultBuildService: springCloudService.SpringCloudServiceDefaultBuildService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.property.containerRegistryName">containerRegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#container_registry_name SpringCloudService#container_registry_name}. |

---

##### `containerRegistryName`<sup>Optional</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.property.containerRegistryName"></a>

```typescript
public readonly containerRegistryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#container_registry_name SpringCloudService#container_registry_name}.

---

### SpringCloudServiceMarketplace <a name="SpringCloudServiceMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceMarketplace: springCloudService.SpringCloudServiceMarketplace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.plan">plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#plan SpringCloudService#plan}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.product">product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#product SpringCloudService#product}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#publisher SpringCloudService#publisher}. |

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#plan SpringCloudService#plan}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#product SpringCloudService#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#publisher SpringCloudService#publisher}.

---

### SpringCloudServiceNetwork <a name="SpringCloudServiceNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceNetwork: springCloudService.SpringCloudServiceNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appSubnetId">appSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#app_subnet_id SpringCloudService#app_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.cidrRanges">cidrRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#cidr_ranges SpringCloudService#cidr_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeSubnetId">serviceRuntimeSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appNetworkResourceGroup">appNetworkResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#app_network_resource_group SpringCloudService#app_network_resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.outboundType">outboundType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#outbound_type SpringCloudService#outbound_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.readTimeoutSeconds">readTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#read_timeout_seconds SpringCloudService#read_timeout_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeNetworkResourceGroup">serviceRuntimeNetworkResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}. |

---

##### `appSubnetId`<sup>Required</sup> <a name="appSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appSubnetId"></a>

```typescript
public readonly appSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#app_subnet_id SpringCloudService#app_subnet_id}.

---

##### `cidrRanges`<sup>Required</sup> <a name="cidrRanges" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.cidrRanges"></a>

```typescript
public readonly cidrRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#cidr_ranges SpringCloudService#cidr_ranges}.

---

##### `serviceRuntimeSubnetId`<sup>Required</sup> <a name="serviceRuntimeSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeSubnetId"></a>

```typescript
public readonly serviceRuntimeSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}.

---

##### `appNetworkResourceGroup`<sup>Optional</sup> <a name="appNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appNetworkResourceGroup"></a>

```typescript
public readonly appNetworkResourceGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#app_network_resource_group SpringCloudService#app_network_resource_group}.

---

##### `outboundType`<sup>Optional</sup> <a name="outboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.outboundType"></a>

```typescript
public readonly outboundType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#outbound_type SpringCloudService#outbound_type}.

---

##### `readTimeoutSeconds`<sup>Optional</sup> <a name="readTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.readTimeoutSeconds"></a>

```typescript
public readonly readTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#read_timeout_seconds SpringCloudService#read_timeout_seconds}.

---

##### `serviceRuntimeNetworkResourceGroup`<sup>Optional</sup> <a name="serviceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeNetworkResourceGroup"></a>

```typescript
public readonly serviceRuntimeNetworkResourceGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}.

---

### SpringCloudServiceRequiredNetworkTrafficRules <a name="SpringCloudServiceRequiredNetworkTrafficRules" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceRequiredNetworkTrafficRules: springCloudService.SpringCloudServiceRequiredNetworkTrafficRules = { ... }
```


### SpringCloudServiceTimeouts <a name="SpringCloudServiceTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceTimeouts: springCloudService.SpringCloudServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#create SpringCloudService#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#delete SpringCloudService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#read SpringCloudService#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#update SpringCloudService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#create SpringCloudService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#delete SpringCloudService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#read SpringCloudService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#update SpringCloudService#update}.

---

### SpringCloudServiceTrace <a name="SpringCloudServiceTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

const springCloudServiceTrace: springCloudService.SpringCloudServiceTrace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#connection_string SpringCloudService#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.sampleRate">sampleRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#sample_rate SpringCloudService#sample_rate}. |

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#connection_string SpringCloudService#connection_string}.

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/spring_cloud_service#sample_rate SpringCloudService#sample_rate}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceConfigServerGitSettingHttpBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---


### SpringCloudServiceConfigServerGitSettingOutputReference <a name="SpringCloudServiceConfigServerGitSettingOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth">putHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository">putRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth">putSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetHttpBasicAuth">resetHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSearchPaths">resetSearchPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSshAuth">resetSshAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpBasicAuth` <a name="putHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth"></a>

```typescript
public putHttpBasicAuth(value: SpringCloudServiceConfigServerGitSettingHttpBasicAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---

##### `putRepository` <a name="putRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository"></a>

```typescript
public putRepository(value: IResolvable | SpringCloudServiceConfigServerGitSettingRepository[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a>[]

---

##### `putSshAuth` <a name="putSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth"></a>

```typescript
public putSshAuth(value: SpringCloudServiceConfigServerGitSettingSshAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---

##### `resetHttpBasicAuth` <a name="resetHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetHttpBasicAuth"></a>

```typescript
public resetHttpBasicAuth(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetSearchPaths` <a name="resetSearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSearchPaths"></a>

```typescript
public resetSearchPaths(): void
```

##### `resetSshAuth` <a name="resetSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSshAuth"></a>

```typescript
public resetSshAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth">httpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repository">repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList">SpringCloudServiceConfigServerGitSettingRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference">SpringCloudServiceConfigServerGitSettingSshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuthInput">httpBasicAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPathsInput">searchPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuthInput">sshAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths">searchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpBasicAuth`<sup>Required</sup> <a name="httpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth"></a>

```typescript
public readonly httpBasicAuth: SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference</a>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repository"></a>

```typescript
public readonly repository: SpringCloudServiceConfigServerGitSettingRepositoryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList">SpringCloudServiceConfigServerGitSettingRepositoryList</a>

---

##### `sshAuth`<sup>Required</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth"></a>

```typescript
public readonly sshAuth: SpringCloudServiceConfigServerGitSettingSshAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference">SpringCloudServiceConfigServerGitSettingSshAuthOutputReference</a>

---

##### `httpBasicAuthInput`<sup>Optional</sup> <a name="httpBasicAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuthInput"></a>

```typescript
public readonly httpBasicAuthInput: SpringCloudServiceConfigServerGitSettingHttpBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: IResolvable | SpringCloudServiceConfigServerGitSettingRepository[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a>[]

---

##### `searchPathsInput`<sup>Optional</sup> <a name="searchPathsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPathsInput"></a>

```typescript
public readonly searchPathsInput: string[];
```

- *Type:* string[]

---

##### `sshAuthInput`<sup>Optional</sup> <a name="sshAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuthInput"></a>

```typescript
public readonly sshAuthInput: SpringCloudServiceConfigServerGitSettingSshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `searchPaths`<sup>Required</sup> <a name="searchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths"></a>

```typescript
public readonly searchPaths: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceConfigServerGitSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---


### SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---


### SpringCloudServiceConfigServerGitSettingRepositoryList <a name="SpringCloudServiceConfigServerGitSettingRepositoryList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get"></a>

```typescript
public get(index: number): SpringCloudServiceConfigServerGitSettingRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudServiceConfigServerGitSettingRepository[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a>[]

---


### SpringCloudServiceConfigServerGitSettingRepositoryOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth">putHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth">putSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetHttpBasicAuth">resetHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSearchPaths">resetSearchPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSshAuth">resetSshAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpBasicAuth` <a name="putHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth"></a>

```typescript
public putHttpBasicAuth(value: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---

##### `putSshAuth` <a name="putSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth"></a>

```typescript
public putSshAuth(value: SpringCloudServiceConfigServerGitSettingRepositorySshAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---

##### `resetHttpBasicAuth` <a name="resetHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetHttpBasicAuth"></a>

```typescript
public resetHttpBasicAuth(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetSearchPaths` <a name="resetSearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSearchPaths"></a>

```typescript
public resetSearchPaths(): void
```

##### `resetSshAuth` <a name="resetSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSshAuth"></a>

```typescript
public resetSshAuth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth">httpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuthInput">httpBasicAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.patternInput">patternInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPathsInput">searchPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuthInput">sshAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern">pattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths">searchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpBasicAuth`<sup>Required</sup> <a name="httpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth"></a>

```typescript
public readonly httpBasicAuth: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference</a>

---

##### `sshAuth`<sup>Required</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth"></a>

```typescript
public readonly sshAuth: SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference</a>

---

##### `httpBasicAuthInput`<sup>Optional</sup> <a name="httpBasicAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuthInput"></a>

```typescript
public readonly httpBasicAuthInput: SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string[];
```

- *Type:* string[]

---

##### `searchPathsInput`<sup>Optional</sup> <a name="searchPathsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPathsInput"></a>

```typescript
public readonly searchPathsInput: string[];
```

- *Type:* string[]

---

##### `sshAuthInput`<sup>Optional</sup> <a name="sshAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuthInput"></a>

```typescript
public readonly sshAuthInput: SpringCloudServiceConfigServerGitSettingRepositorySshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string[];
```

- *Type:* string[]

---

##### `searchPaths`<sup>Required</sup> <a name="searchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths"></a>

```typescript
public readonly searchPaths: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudServiceConfigServerGitSettingRepository;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository">SpringCloudServiceConfigServerGitSettingRepository</a>

---


### SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKey">resetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKeyAlgorithm">resetHostKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetStrictHostKeyCheckingEnabled">resetStrictHostKeyCheckingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostKey` <a name="resetHostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKey"></a>

```typescript
public resetHostKey(): void
```

##### `resetHostKeyAlgorithm` <a name="resetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKeyAlgorithm"></a>

```typescript
public resetHostKeyAlgorithm(): void
```

##### `resetStrictHostKeyCheckingEnabled` <a name="resetStrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetStrictHostKeyCheckingEnabled"></a>

```typescript
public resetStrictHostKeyCheckingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput">hostKeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyInput">hostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabledInput">strictHostKeyCheckingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey">hostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled">strictHostKeyCheckingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostKeyAlgorithmInput`<sup>Optional</sup> <a name="hostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```typescript
public readonly hostKeyAlgorithmInput: string;
```

- *Type:* string

---

##### `hostKeyInput`<sup>Optional</sup> <a name="hostKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyInput"></a>

```typescript
public readonly hostKeyInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `strictHostKeyCheckingEnabledInput`<sup>Optional</sup> <a name="strictHostKeyCheckingEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabledInput"></a>

```typescript
public readonly strictHostKeyCheckingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

---

##### `hostKeyAlgorithm`<sup>Required</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm"></a>

```typescript
public readonly hostKeyAlgorithm: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `strictHostKeyCheckingEnabled`<sup>Required</sup> <a name="strictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```typescript
public readonly strictHostKeyCheckingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceConfigServerGitSettingRepositorySshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---


### SpringCloudServiceConfigServerGitSettingSshAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingSshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKey">resetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKeyAlgorithm">resetHostKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetStrictHostKeyCheckingEnabled">resetStrictHostKeyCheckingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostKey` <a name="resetHostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKey"></a>

```typescript
public resetHostKey(): void
```

##### `resetHostKeyAlgorithm` <a name="resetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKeyAlgorithm"></a>

```typescript
public resetHostKeyAlgorithm(): void
```

##### `resetStrictHostKeyCheckingEnabled` <a name="resetStrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetStrictHostKeyCheckingEnabled"></a>

```typescript
public resetStrictHostKeyCheckingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithmInput">hostKeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyInput">hostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabledInput">strictHostKeyCheckingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey">hostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled">strictHostKeyCheckingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostKeyAlgorithmInput`<sup>Optional</sup> <a name="hostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```typescript
public readonly hostKeyAlgorithmInput: string;
```

- *Type:* string

---

##### `hostKeyInput`<sup>Optional</sup> <a name="hostKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyInput"></a>

```typescript
public readonly hostKeyInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `strictHostKeyCheckingEnabledInput`<sup>Optional</sup> <a name="strictHostKeyCheckingEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabledInput"></a>

```typescript
public readonly strictHostKeyCheckingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

---

##### `hostKeyAlgorithm`<sup>Required</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm"></a>

```typescript
public readonly hostKeyAlgorithm: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `strictHostKeyCheckingEnabled`<sup>Required</sup> <a name="strictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```typescript
public readonly strictHostKeyCheckingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceConfigServerGitSettingSshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---


### SpringCloudServiceContainerRegistryList <a name="SpringCloudServiceContainerRegistryList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceContainerRegistryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get"></a>

```typescript
public get(index: number): SpringCloudServiceContainerRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudServiceContainerRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a>[]

---


### SpringCloudServiceContainerRegistryOutputReference <a name="SpringCloudServiceContainerRegistryOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceContainerRegistryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudServiceContainerRegistry;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry">SpringCloudServiceContainerRegistry</a>

---


### SpringCloudServiceDefaultBuildServiceOutputReference <a name="SpringCloudServiceDefaultBuildServiceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resetContainerRegistryName">resetContainerRegistryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerRegistryName` <a name="resetContainerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resetContainerRegistryName"></a>

```typescript
public resetContainerRegistryName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryNameInput">containerRegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryName">containerRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerRegistryNameInput`<sup>Optional</sup> <a name="containerRegistryNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryNameInput"></a>

```typescript
public readonly containerRegistryNameInput: string;
```

- *Type:* string

---

##### `containerRegistryName`<sup>Required</sup> <a name="containerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryName"></a>

```typescript
public readonly containerRegistryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceDefaultBuildService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---


### SpringCloudServiceMarketplaceOutputReference <a name="SpringCloudServiceMarketplaceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceMarketplaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceMarketplace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---


### SpringCloudServiceNetworkOutputReference <a name="SpringCloudServiceNetworkOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetAppNetworkResourceGroup">resetAppNetworkResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetOutboundType">resetOutboundType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetReadTimeoutSeconds">resetReadTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetServiceRuntimeNetworkResourceGroup">resetServiceRuntimeNetworkResourceGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppNetworkResourceGroup` <a name="resetAppNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetAppNetworkResourceGroup"></a>

```typescript
public resetAppNetworkResourceGroup(): void
```

##### `resetOutboundType` <a name="resetOutboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetOutboundType"></a>

```typescript
public resetOutboundType(): void
```

##### `resetReadTimeoutSeconds` <a name="resetReadTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetReadTimeoutSeconds"></a>

```typescript
public resetReadTimeoutSeconds(): void
```

##### `resetServiceRuntimeNetworkResourceGroup` <a name="resetServiceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetServiceRuntimeNetworkResourceGroup"></a>

```typescript
public resetServiceRuntimeNetworkResourceGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroupInput">appNetworkResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetIdInput">appSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRangesInput">cidrRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundTypeInput">outboundTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSecondsInput">readTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroupInput">serviceRuntimeNetworkResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetIdInput">serviceRuntimeSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroup">appNetworkResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetId">appSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRanges">cidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundType">outboundType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSeconds">readTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroup">serviceRuntimeNetworkResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetId">serviceRuntimeSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appNetworkResourceGroupInput`<sup>Optional</sup> <a name="appNetworkResourceGroupInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroupInput"></a>

```typescript
public readonly appNetworkResourceGroupInput: string;
```

- *Type:* string

---

##### `appSubnetIdInput`<sup>Optional</sup> <a name="appSubnetIdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetIdInput"></a>

```typescript
public readonly appSubnetIdInput: string;
```

- *Type:* string

---

##### `cidrRangesInput`<sup>Optional</sup> <a name="cidrRangesInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRangesInput"></a>

```typescript
public readonly cidrRangesInput: string[];
```

- *Type:* string[]

---

##### `outboundTypeInput`<sup>Optional</sup> <a name="outboundTypeInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundTypeInput"></a>

```typescript
public readonly outboundTypeInput: string;
```

- *Type:* string

---

##### `readTimeoutSecondsInput`<sup>Optional</sup> <a name="readTimeoutSecondsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSecondsInput"></a>

```typescript
public readonly readTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `serviceRuntimeNetworkResourceGroupInput`<sup>Optional</sup> <a name="serviceRuntimeNetworkResourceGroupInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroupInput"></a>

```typescript
public readonly serviceRuntimeNetworkResourceGroupInput: string;
```

- *Type:* string

---

##### `serviceRuntimeSubnetIdInput`<sup>Optional</sup> <a name="serviceRuntimeSubnetIdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetIdInput"></a>

```typescript
public readonly serviceRuntimeSubnetIdInput: string;
```

- *Type:* string

---

##### `appNetworkResourceGroup`<sup>Required</sup> <a name="appNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroup"></a>

```typescript
public readonly appNetworkResourceGroup: string;
```

- *Type:* string

---

##### `appSubnetId`<sup>Required</sup> <a name="appSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetId"></a>

```typescript
public readonly appSubnetId: string;
```

- *Type:* string

---

##### `cidrRanges`<sup>Required</sup> <a name="cidrRanges" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRanges"></a>

```typescript
public readonly cidrRanges: string[];
```

- *Type:* string[]

---

##### `outboundType`<sup>Required</sup> <a name="outboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundType"></a>

```typescript
public readonly outboundType: string;
```

- *Type:* string

---

##### `readTimeoutSeconds`<sup>Required</sup> <a name="readTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSeconds"></a>

```typescript
public readonly readTimeoutSeconds: number;
```

- *Type:* number

---

##### `serviceRuntimeNetworkResourceGroup`<sup>Required</sup> <a name="serviceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroup"></a>

```typescript
public readonly serviceRuntimeNetworkResourceGroup: string;
```

- *Type:* string

---

##### `serviceRuntimeSubnetId`<sup>Required</sup> <a name="serviceRuntimeSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetId"></a>

```typescript
public readonly serviceRuntimeSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---


### SpringCloudServiceRequiredNetworkTrafficRulesList <a name="SpringCloudServiceRequiredNetworkTrafficRulesList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get"></a>

```typescript
public get(index: number): SpringCloudServiceRequiredNetworkTrafficRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SpringCloudServiceRequiredNetworkTrafficRulesOutputReference <a name="SpringCloudServiceRequiredNetworkTrafficRulesOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns">fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules">SpringCloudServiceRequiredNetworkTrafficRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceRequiredNetworkTrafficRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules">SpringCloudServiceRequiredNetworkTrafficRules</a>

---


### SpringCloudServiceTimeoutsOutputReference <a name="SpringCloudServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a>

---


### SpringCloudServiceTraceOutputReference <a name="SpringCloudServiceTraceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer"></a>

```typescript
import { springCloudService } from '@cdktf/provider-azurerm'

new springCloudService.SpringCloudServiceTraceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetSampleRate"></a>

```typescript
public resetSampleRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRateInput"></a>

```typescript
public readonly sampleRateInput: number;
```

- *Type:* number

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudServiceTrace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---



