# `springCloudGateway` Submodule <a name="`springCloudGateway` Submodule" id="@cdktf/provider-azurerm.springCloudGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudGateway <a name="SpringCloudGateway" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway azurerm_spring_cloud_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGateway(scope: Construct, id: string, config: SpringCloudGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig">SpringCloudGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig">SpringCloudGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata">putApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization">putClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance">putLocalResponseCachePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute">putLocalResponseCachePerRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso">putSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApiMetadata">resetApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringIds">resetApplicationPerformanceMonitoringIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringTypes">resetApplicationPerformanceMonitoringTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetClientAuthorization">resetClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerInstance">resetLocalResponseCachePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerRoute">resetLocalResponseCachePerRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSensitiveEnvironmentVariables">resetSensitiveEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSso">resetSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiMetadata` <a name="putApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata"></a>

```typescript
public putApiMetadata(value: SpringCloudGatewayApiMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putApiMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---

##### `putClientAuthorization` <a name="putClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization"></a>

```typescript
public putClientAuthorization(value: SpringCloudGatewayClientAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putClientAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---

##### `putCors` <a name="putCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors"></a>

```typescript
public putCors(value: SpringCloudGatewayCors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---

##### `putLocalResponseCachePerInstance` <a name="putLocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance"></a>

```typescript
public putLocalResponseCachePerInstance(value: SpringCloudGatewayLocalResponseCachePerInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

---

##### `putLocalResponseCachePerRoute` <a name="putLocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute"></a>

```typescript
public putLocalResponseCachePerRoute(value: SpringCloudGatewayLocalResponseCachePerRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putLocalResponseCachePerRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota"></a>

```typescript
public putQuota(value: SpringCloudGatewayQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---

##### `putSso` <a name="putSso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso"></a>

```typescript
public putSso(value: SpringCloudGatewaySso): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putSso.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

---

##### `resetApiMetadata` <a name="resetApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApiMetadata"></a>

```typescript
public resetApiMetadata(): void
```

##### `resetApplicationPerformanceMonitoringIds` <a name="resetApplicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringIds"></a>

```typescript
public resetApplicationPerformanceMonitoringIds(): void
```

##### `resetApplicationPerformanceMonitoringTypes` <a name="resetApplicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetApplicationPerformanceMonitoringTypes"></a>

```typescript
public resetApplicationPerformanceMonitoringTypes(): void
```

##### `resetClientAuthorization` <a name="resetClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetClientAuthorization"></a>

```typescript
public resetClientAuthorization(): void
```

##### `resetCors` <a name="resetCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetCors"></a>

```typescript
public resetCors(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetHttpsOnly"></a>

```typescript
public resetHttpsOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetLocalResponseCachePerInstance` <a name="resetLocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerInstance"></a>

```typescript
public resetLocalResponseCachePerInstance(): void
```

##### `resetLocalResponseCachePerRoute` <a name="resetLocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetLocalResponseCachePerRoute"></a>

```typescript
public resetLocalResponseCachePerRoute(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetSensitiveEnvironmentVariables` <a name="resetSensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSensitiveEnvironmentVariables"></a>

```typescript
public resetSensitiveEnvironmentVariables(): void
```

##### `resetSso` <a name="resetSso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetSso"></a>

```typescript
public resetSso(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

springCloudGateway.SpringCloudGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

springCloudGateway.SpringCloudGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

springCloudGateway.SpringCloudGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

springCloudGateway.SpringCloudGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadata">apiMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference">SpringCloudGatewayApiMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorization">clientAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference">SpringCloudGatewayClientAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference">SpringCloudGatewayCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstance">localResponseCachePerInstance</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference">SpringCloudGatewayLocalResponseCachePerInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRoute">localResponseCachePerRoute</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference">SpringCloudGatewayLocalResponseCachePerRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference">SpringCloudGatewayQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference">SpringCloudGatewaySsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference">SpringCloudGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadataInput">apiMetadataInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIdsInput">applicationPerformanceMonitoringIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypesInput">applicationPerformanceMonitoringTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorizationInput">clientAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.corsInput">corsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstanceInput">localResponseCachePerInstanceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRouteInput">localResponseCachePerRouteInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariablesInput">sensitiveEnvironmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.ssoInput">ssoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIds">applicationPerformanceMonitoringIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypes">applicationPerformanceMonitoringTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariables">sensitiveEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceId">springCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiMetadata`<sup>Required</sup> <a name="apiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadata"></a>

```typescript
public readonly apiMetadata: SpringCloudGatewayApiMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference">SpringCloudGatewayApiMetadataOutputReference</a>

---

##### `clientAuthorization`<sup>Required</sup> <a name="clientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorization"></a>

```typescript
public readonly clientAuthorization: SpringCloudGatewayClientAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference">SpringCloudGatewayClientAuthorizationOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.cors"></a>

```typescript
public readonly cors: SpringCloudGatewayCorsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference">SpringCloudGatewayCorsOutputReference</a>

---

##### `localResponseCachePerInstance`<sup>Required</sup> <a name="localResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstance"></a>

```typescript
public readonly localResponseCachePerInstance: SpringCloudGatewayLocalResponseCachePerInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference">SpringCloudGatewayLocalResponseCachePerInstanceOutputReference</a>

---

##### `localResponseCachePerRoute`<sup>Required</sup> <a name="localResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRoute"></a>

```typescript
public readonly localResponseCachePerRoute: SpringCloudGatewayLocalResponseCachePerRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference">SpringCloudGatewayLocalResponseCachePerRouteOutputReference</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quota"></a>

```typescript
public readonly quota: SpringCloudGatewayQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference">SpringCloudGatewayQuotaOutputReference</a>

---

##### `sso`<sup>Required</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sso"></a>

```typescript
public readonly sso: SpringCloudGatewaySsoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference">SpringCloudGatewaySsoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference">SpringCloudGatewayTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `apiMetadataInput`<sup>Optional</sup> <a name="apiMetadataInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.apiMetadataInput"></a>

```typescript
public readonly apiMetadataInput: SpringCloudGatewayApiMetadata;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---

##### `applicationPerformanceMonitoringIdsInput`<sup>Optional</sup> <a name="applicationPerformanceMonitoringIdsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIdsInput"></a>

```typescript
public readonly applicationPerformanceMonitoringIdsInput: string[];
```

- *Type:* string[]

---

##### `applicationPerformanceMonitoringTypesInput`<sup>Optional</sup> <a name="applicationPerformanceMonitoringTypesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypesInput"></a>

```typescript
public readonly applicationPerformanceMonitoringTypesInput: string[];
```

- *Type:* string[]

---

##### `clientAuthorizationInput`<sup>Optional</sup> <a name="clientAuthorizationInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.clientAuthorizationInput"></a>

```typescript
public readonly clientAuthorizationInput: SpringCloudGatewayClientAuthorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.corsInput"></a>

```typescript
public readonly corsInput: SpringCloudGatewayCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnlyInput"></a>

```typescript
public readonly httpsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `localResponseCachePerInstanceInput`<sup>Optional</sup> <a name="localResponseCachePerInstanceInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerInstanceInput"></a>

```typescript
public readonly localResponseCachePerInstanceInput: SpringCloudGatewayLocalResponseCachePerInstance;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

---

##### `localResponseCachePerRouteInput`<sup>Optional</sup> <a name="localResponseCachePerRouteInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.localResponseCachePerRouteInput"></a>

```typescript
public readonly localResponseCachePerRouteInput: SpringCloudGatewayLocalResponseCachePerRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.quotaInput"></a>

```typescript
public readonly quotaInput: SpringCloudGatewayQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---

##### `sensitiveEnvironmentVariablesInput`<sup>Optional</sup> <a name="sensitiveEnvironmentVariablesInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariablesInput"></a>

```typescript
public readonly sensitiveEnvironmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceIdInput"></a>

```typescript
public readonly springCloudServiceIdInput: string;
```

- *Type:* string

---

##### `ssoInput`<sup>Optional</sup> <a name="ssoInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.ssoInput"></a>

```typescript
public readonly ssoInput: SpringCloudGatewaySso;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

---

##### `applicationPerformanceMonitoringIds`<sup>Required</sup> <a name="applicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringIds"></a>

```typescript
public readonly applicationPerformanceMonitoringIds: string[];
```

- *Type:* string[]

---

##### `applicationPerformanceMonitoringTypes`<sup>Required</sup> <a name="applicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.applicationPerformanceMonitoringTypes"></a>

```typescript
public readonly applicationPerformanceMonitoringTypes: string[];
```

- *Type:* string[]

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensitiveEnvironmentVariables`<sup>Required</sup> <a name="sensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.sensitiveEnvironmentVariables"></a>

```typescript
public readonly sensitiveEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.springCloudServiceId"></a>

```typescript
public readonly springCloudServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudGatewayApiMetadata <a name="SpringCloudGatewayApiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewayApiMetadata: springCloudGateway.SpringCloudGatewayApiMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.documentationUrl">documentationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.serverUrl">serverUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#description SpringCloudGateway#description}.

---

##### `documentationUrl`<sup>Optional</sup> <a name="documentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.documentationUrl"></a>

```typescript
public readonly documentationUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#documentation_url SpringCloudGateway#documentation_url}.

---

##### `serverUrl`<sup>Optional</sup> <a name="serverUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.serverUrl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#server_url SpringCloudGateway#server_url}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#title SpringCloudGateway#title}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#version SpringCloudGateway#version}.

---

### SpringCloudGatewayClientAuthorization <a name="SpringCloudGatewayClientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewayClientAuthorization: springCloudGateway.SpringCloudGatewayClientAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.certificateIds">certificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.verificationEnabled">verificationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}. |

---

##### `certificateIds`<sup>Optional</sup> <a name="certificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.certificateIds"></a>

```typescript
public readonly certificateIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#certificate_ids SpringCloudGateway#certificate_ids}.

---

##### `verificationEnabled`<sup>Optional</sup> <a name="verificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization.property.verificationEnabled"></a>

```typescript
public readonly verificationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#verification_enabled SpringCloudGateway#verification_enabled}.

---

### SpringCloudGatewayConfig <a name="SpringCloudGatewayConfig" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewayConfig: springCloudGateway.SpringCloudGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.apiMetadata">apiMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | api_metadata block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringIds">applicationPerformanceMonitoringIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringTypes">applicationPerformanceMonitoringTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.clientAuthorization">clientAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | client_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.httpsOnly">httpsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerInstance">localResponseCachePerInstance</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | local_response_cache_per_instance block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerRoute">localResponseCachePerRoute</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | local_response_cache_per_route block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sensitiveEnvironmentVariables">sensitiveEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sso">sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#name SpringCloudGateway#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.springCloudServiceId"></a>

```typescript
public readonly springCloudServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#spring_cloud_service_id SpringCloudGateway#spring_cloud_service_id}.

---

##### `apiMetadata`<sup>Optional</sup> <a name="apiMetadata" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.apiMetadata"></a>

```typescript
public readonly apiMetadata: SpringCloudGatewayApiMetadata;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

api_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#api_metadata SpringCloudGateway#api_metadata}

---

##### `applicationPerformanceMonitoringIds`<sup>Optional</sup> <a name="applicationPerformanceMonitoringIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringIds"></a>

```typescript
public readonly applicationPerformanceMonitoringIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#application_performance_monitoring_ids SpringCloudGateway#application_performance_monitoring_ids}.

---

##### `applicationPerformanceMonitoringTypes`<sup>Optional</sup> <a name="applicationPerformanceMonitoringTypes" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.applicationPerformanceMonitoringTypes"></a>

```typescript
public readonly applicationPerformanceMonitoringTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#application_performance_monitoring_types SpringCloudGateway#application_performance_monitoring_types}.

---

##### `clientAuthorization`<sup>Optional</sup> <a name="clientAuthorization" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.clientAuthorization"></a>

```typescript
public readonly clientAuthorization: SpringCloudGatewayClientAuthorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

client_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#client_authorization SpringCloudGateway#client_authorization}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.cors"></a>

```typescript
public readonly cors: SpringCloudGatewayCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#cors SpringCloudGateway#cors}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#environment_variables SpringCloudGateway#environment_variables}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#https_only SpringCloudGateway#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#id SpringCloudGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#instance_count SpringCloudGateway#instance_count}.

---

##### `localResponseCachePerInstance`<sup>Optional</sup> <a name="localResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerInstance"></a>

```typescript
public readonly localResponseCachePerInstance: SpringCloudGatewayLocalResponseCachePerInstance;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

local_response_cache_per_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#local_response_cache_per_instance SpringCloudGateway#local_response_cache_per_instance}

---

##### `localResponseCachePerRoute`<sup>Optional</sup> <a name="localResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.localResponseCachePerRoute"></a>

```typescript
public readonly localResponseCachePerRoute: SpringCloudGatewayLocalResponseCachePerRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

local_response_cache_per_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#local_response_cache_per_route SpringCloudGateway#local_response_cache_per_route}

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#public_network_access_enabled SpringCloudGateway#public_network_access_enabled}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.quota"></a>

```typescript
public readonly quota: SpringCloudGatewayQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#quota SpringCloudGateway#quota}

---

##### `sensitiveEnvironmentVariables`<sup>Optional</sup> <a name="sensitiveEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sensitiveEnvironmentVariables"></a>

```typescript
public readonly sensitiveEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#sensitive_environment_variables SpringCloudGateway#sensitive_environment_variables}.

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.sso"></a>

```typescript
public readonly sso: SpringCloudGatewaySso;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#sso SpringCloudGateway#sso}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#timeouts SpringCloudGateway#timeouts}

---

### SpringCloudGatewayCors <a name="SpringCloudGatewayCors" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewayCors: springCloudGateway.SpringCloudGatewayCors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOriginPatterns">allowedOriginPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#allowed_origin_patterns SpringCloudGateway#allowed_origin_patterns}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.credentialsAllowed">credentialsAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}. |

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#allowed_headers SpringCloudGateway#allowed_headers}.

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#allowed_methods SpringCloudGateway#allowed_methods}.

---

##### `allowedOriginPatterns`<sup>Optional</sup> <a name="allowedOriginPatterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOriginPatterns"></a>

```typescript
public readonly allowedOriginPatterns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#allowed_origin_patterns SpringCloudGateway#allowed_origin_patterns}.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#allowed_origins SpringCloudGateway#allowed_origins}.

---

##### `credentialsAllowed`<sup>Optional</sup> <a name="credentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.credentialsAllowed"></a>

```typescript
public readonly credentialsAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#credentials_allowed SpringCloudGateway#credentials_allowed}.

---

##### `exposedHeaders`<sup>Optional</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#exposed_headers SpringCloudGateway#exposed_headers}.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#max_age_seconds SpringCloudGateway#max_age_seconds}.

---

### SpringCloudGatewayLocalResponseCachePerInstance <a name="SpringCloudGatewayLocalResponseCachePerInstance" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewayLocalResponseCachePerInstance: springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.timeToLive">timeToLive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}.

---

##### `timeToLive`<sup>Optional</sup> <a name="timeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance.property.timeToLive"></a>

```typescript
public readonly timeToLive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}.

---

### SpringCloudGatewayLocalResponseCachePerRoute <a name="SpringCloudGatewayLocalResponseCachePerRoute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewayLocalResponseCachePerRoute: springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.timeToLive">timeToLive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#size SpringCloudGateway#size}.

---

##### `timeToLive`<sup>Optional</sup> <a name="timeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute.property.timeToLive"></a>

```typescript
public readonly timeToLive: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#time_to_live SpringCloudGateway#time_to_live}.

---

### SpringCloudGatewayQuota <a name="SpringCloudGatewayQuota" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewayQuota: springCloudGateway.SpringCloudGatewayQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.cpu">cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.memory">memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#cpu SpringCloudGateway#cpu}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#memory SpringCloudGateway#memory}.

---

### SpringCloudGatewaySso <a name="SpringCloudGatewaySso" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewaySso: springCloudGateway.SpringCloudGatewaySso = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.issuerUri">issuerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.scope">scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#client_id SpringCloudGateway#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#client_secret SpringCloudGateway#client_secret}.

---

##### `issuerUri`<sup>Optional</sup> <a name="issuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#issuer_uri SpringCloudGateway#issuer_uri}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#scope SpringCloudGateway#scope}.

---

### SpringCloudGatewayTimeouts <a name="SpringCloudGatewayTimeouts" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

const springCloudGatewayTimeouts: springCloudGateway.SpringCloudGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#create SpringCloudGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#delete SpringCloudGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#read SpringCloudGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/spring_cloud_gateway#update SpringCloudGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudGatewayApiMetadataOutputReference <a name="SpringCloudGatewayApiMetadataOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGatewayApiMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDocumentationUrl">resetDocumentationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetServerUrl">resetServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentationUrl` <a name="resetDocumentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetDocumentationUrl"></a>

```typescript
public resetDocumentationUrl(): void
```

##### `resetServerUrl` <a name="resetServerUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetServerUrl"></a>

```typescript
public resetServerUrl(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrlInput">documentationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrlInput">serverUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrl">documentationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrl">serverUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `documentationUrlInput`<sup>Optional</sup> <a name="documentationUrlInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrlInput"></a>

```typescript
public readonly documentationUrlInput: string;
```

- *Type:* string

---

##### `serverUrlInput`<sup>Optional</sup> <a name="serverUrlInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrlInput"></a>

```typescript
public readonly serverUrlInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentationUrl`<sup>Required</sup> <a name="documentationUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.documentationUrl"></a>

```typescript
public readonly documentationUrl: string;
```

- *Type:* string

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.serverUrl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudGatewayApiMetadata;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayApiMetadata">SpringCloudGatewayApiMetadata</a>

---


### SpringCloudGatewayClientAuthorizationOutputReference <a name="SpringCloudGatewayClientAuthorizationOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetCertificateIds">resetCertificateIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetVerificationEnabled">resetVerificationEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIds` <a name="resetCertificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetCertificateIds"></a>

```typescript
public resetCertificateIds(): void
```

##### `resetVerificationEnabled` <a name="resetVerificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.resetVerificationEnabled"></a>

```typescript
public resetVerificationEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIdsInput">certificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabledInput">verificationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIds">certificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabled">verificationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateIdsInput`<sup>Optional</sup> <a name="certificateIdsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIdsInput"></a>

```typescript
public readonly certificateIdsInput: string[];
```

- *Type:* string[]

---

##### `verificationEnabledInput`<sup>Optional</sup> <a name="verificationEnabledInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabledInput"></a>

```typescript
public readonly verificationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateIds`<sup>Required</sup> <a name="certificateIds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.certificateIds"></a>

```typescript
public readonly certificateIds: string[];
```

- *Type:* string[]

---

##### `verificationEnabled`<sup>Required</sup> <a name="verificationEnabled" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.verificationEnabled"></a>

```typescript
public readonly verificationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudGatewayClientAuthorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayClientAuthorization">SpringCloudGatewayClientAuthorization</a>

---


### SpringCloudGatewayCorsOutputReference <a name="SpringCloudGatewayCorsOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGatewayCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOriginPatterns">resetAllowedOriginPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetCredentialsAllowed">resetCredentialsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetExposedHeaders">resetExposedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedHeaders"></a>

```typescript
public resetAllowedHeaders(): void
```

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedMethods"></a>

```typescript
public resetAllowedMethods(): void
```

##### `resetAllowedOriginPatterns` <a name="resetAllowedOriginPatterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOriginPatterns"></a>

```typescript
public resetAllowedOriginPatterns(): void
```

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetCredentialsAllowed` <a name="resetCredentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetCredentialsAllowed"></a>

```typescript
public resetCredentialsAllowed(): void
```

##### `resetExposedHeaders` <a name="resetExposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetExposedHeaders"></a>

```typescript
public resetExposedHeaders(): void
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.resetMaxAgeSeconds"></a>

```typescript
public resetMaxAgeSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatternsInput">allowedOriginPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowedInput">credentialsAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatterns">allowedOriginPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowed">credentialsAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeadersInput"></a>

```typescript
public readonly allowedHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginPatternsInput`<sup>Optional</sup> <a name="allowedOriginPatternsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatternsInput"></a>

```typescript
public readonly allowedOriginPatternsInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `credentialsAllowedInput`<sup>Optional</sup> <a name="credentialsAllowedInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowedInput"></a>

```typescript
public readonly credentialsAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeadersInput"></a>

```typescript
public readonly exposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSecondsInput"></a>

```typescript
public readonly maxAgeSecondsInput: number;
```

- *Type:* number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedHeaders"></a>

```typescript
public readonly allowedHeaders: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `allowedOriginPatterns`<sup>Required</sup> <a name="allowedOriginPatterns" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOriginPatterns"></a>

```typescript
public readonly allowedOriginPatterns: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `credentialsAllowed`<sup>Required</sup> <a name="credentialsAllowed" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.credentialsAllowed"></a>

```typescript
public readonly credentialsAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudGatewayCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayCors">SpringCloudGatewayCors</a>

---


### SpringCloudGatewayLocalResponseCachePerInstanceOutputReference <a name="SpringCloudGatewayLocalResponseCachePerInstanceOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetTimeToLive">resetTimeToLive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTimeToLive` <a name="resetTimeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.resetTimeToLive"></a>

```typescript
public resetTimeToLive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLiveInput">timeToLiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLive">timeToLive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `timeToLiveInput`<sup>Optional</sup> <a name="timeToLiveInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLiveInput"></a>

```typescript
public readonly timeToLiveInput: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `timeToLive`<sup>Required</sup> <a name="timeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.timeToLive"></a>

```typescript
public readonly timeToLive: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudGatewayLocalResponseCachePerInstance;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerInstance">SpringCloudGatewayLocalResponseCachePerInstance</a>

---


### SpringCloudGatewayLocalResponseCachePerRouteOutputReference <a name="SpringCloudGatewayLocalResponseCachePerRouteOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetTimeToLive">resetTimeToLive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTimeToLive` <a name="resetTimeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.resetTimeToLive"></a>

```typescript
public resetTimeToLive(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLiveInput">timeToLiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLive">timeToLive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `timeToLiveInput`<sup>Optional</sup> <a name="timeToLiveInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLiveInput"></a>

```typescript
public readonly timeToLiveInput: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `timeToLive`<sup>Required</sup> <a name="timeToLive" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.timeToLive"></a>

```typescript
public readonly timeToLive: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudGatewayLocalResponseCachePerRoute;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayLocalResponseCachePerRoute">SpringCloudGatewayLocalResponseCachePerRoute</a>

---


### SpringCloudGatewayQuotaOutputReference <a name="SpringCloudGatewayQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGatewayQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudGatewayQuota;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayQuota">SpringCloudGatewayQuota</a>

---


### SpringCloudGatewaySsoOutputReference <a name="SpringCloudGatewaySsoOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGatewaySsoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetIssuerUri">resetIssuerUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetIssuerUri` <a name="resetIssuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetIssuerUri"></a>

```typescript
public resetIssuerUri(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scopeInput">scopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scope">scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySsoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpringCloudGatewaySso;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewaySso">SpringCloudGatewaySso</a>

---


### SpringCloudGatewayTimeoutsOutputReference <a name="SpringCloudGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudGateway } from '@cdktf/provider-azurerm'

new springCloudGateway.SpringCloudGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudGateway.SpringCloudGatewayTimeouts">SpringCloudGatewayTimeouts</a>

---



