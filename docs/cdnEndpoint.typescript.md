# `cdnEndpoint` Submodule <a name="`cdnEndpoint` Submodule" id="@cdktf/provider-azurerm.cdnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnEndpoint <a name="CdnEndpoint" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint azurerm_cdn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpoint(scope: Construct, id: string, config: CdnEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig">CdnEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig">CdnEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule">putDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter">putGeoFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule">putGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetContentTypesToCompress">resetContentTypesToCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetDeliveryRule">resetDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGeoFilter">resetGeoFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGlobalDeliveryRule">resetGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsCompressionEnabled">resetIsCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpAllowed">resetIsHttpAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpsAllowed">resetIsHttpsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOptimizationType">resetOptimizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginHostHeader">resetOriginHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginPath">resetOriginPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetProbePath">resetProbePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetQuerystringCachingBehaviour">resetQuerystringCachingBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryRule` <a name="putDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule"></a>

```typescript
public putDeliveryRule(value: IResolvable | CdnEndpointDeliveryRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>[]

---

##### `putGeoFilter` <a name="putGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter"></a>

```typescript
public putGeoFilter(value: IResolvable | CdnEndpointGeoFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>[]

---

##### `putGlobalDeliveryRule` <a name="putGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule"></a>

```typescript
public putGlobalDeliveryRule(value: CdnEndpointGlobalDeliveryRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---

##### `putOrigin` <a name="putOrigin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin"></a>

```typescript
public putOrigin(value: IResolvable | CdnEndpointOrigin[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

---

##### `resetContentTypesToCompress` <a name="resetContentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetContentTypesToCompress"></a>

```typescript
public resetContentTypesToCompress(): void
```

##### `resetDeliveryRule` <a name="resetDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetDeliveryRule"></a>

```typescript
public resetDeliveryRule(): void
```

##### `resetGeoFilter` <a name="resetGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGeoFilter"></a>

```typescript
public resetGeoFilter(): void
```

##### `resetGlobalDeliveryRule` <a name="resetGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGlobalDeliveryRule"></a>

```typescript
public resetGlobalDeliveryRule(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCompressionEnabled` <a name="resetIsCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsCompressionEnabled"></a>

```typescript
public resetIsCompressionEnabled(): void
```

##### `resetIsHttpAllowed` <a name="resetIsHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpAllowed"></a>

```typescript
public resetIsHttpAllowed(): void
```

##### `resetIsHttpsAllowed` <a name="resetIsHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpsAllowed"></a>

```typescript
public resetIsHttpsAllowed(): void
```

##### `resetOptimizationType` <a name="resetOptimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOptimizationType"></a>

```typescript
public resetOptimizationType(): void
```

##### `resetOriginHostHeader` <a name="resetOriginHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginHostHeader"></a>

```typescript
public resetOriginHostHeader(): void
```

##### `resetOriginPath` <a name="resetOriginPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginPath"></a>

```typescript
public resetOriginPath(): void
```

##### `resetProbePath` <a name="resetProbePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetProbePath"></a>

```typescript
public resetProbePath(): void
```

##### `resetQuerystringCachingBehaviour` <a name="resetQuerystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetQuerystringCachingBehaviour"></a>

```typescript
public resetQuerystringCachingBehaviour(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

cdnEndpoint.CdnEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

cdnEndpoint.CdnEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

cdnEndpoint.CdnEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

cdnEndpoint.CdnEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CdnEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRule">deliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList">CdnEndpointDeliveryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilter">geoFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList">CdnEndpointGeoFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRule">globalDeliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference">CdnEndpointGlobalDeliveryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList">CdnEndpointOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference">CdnEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompressInput">contentTypesToCompressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRuleInput">deliveryRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilterInput">geoFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRuleInput">globalDeliveryRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabledInput">isCompressionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowedInput">isHttpAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowedInput">isHttpsAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationTypeInput">optimizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeaderInput">originHostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originInput">originInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPathInput">originPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePathInput">probePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviourInput">querystringCachingBehaviourInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompress">contentTypesToCompress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabled">isCompressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowed">isHttpAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowed">isHttpsAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationType">optimizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeader">originHostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPath">originPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePath">probePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviour">querystringCachingBehaviour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deliveryRule`<sup>Required</sup> <a name="deliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRule"></a>

```typescript
public readonly deliveryRule: CdnEndpointDeliveryRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList">CdnEndpointDeliveryRuleList</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `geoFilter`<sup>Required</sup> <a name="geoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilter"></a>

```typescript
public readonly geoFilter: CdnEndpointGeoFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList">CdnEndpointGeoFilterList</a>

---

##### `globalDeliveryRule`<sup>Required</sup> <a name="globalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRule"></a>

```typescript
public readonly globalDeliveryRule: CdnEndpointGlobalDeliveryRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference">CdnEndpointGlobalDeliveryRuleOutputReference</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.origin"></a>

```typescript
public readonly origin: CdnEndpointOriginList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList">CdnEndpointOriginList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: CdnEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference">CdnEndpointTimeoutsOutputReference</a>

---

##### `contentTypesToCompressInput`<sup>Optional</sup> <a name="contentTypesToCompressInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompressInput"></a>

```typescript
public readonly contentTypesToCompressInput: string[];
```

- *Type:* string[]

---

##### `deliveryRuleInput`<sup>Optional</sup> <a name="deliveryRuleInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRuleInput"></a>

```typescript
public readonly deliveryRuleInput: IResolvable | CdnEndpointDeliveryRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>[]

---

##### `geoFilterInput`<sup>Optional</sup> <a name="geoFilterInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilterInput"></a>

```typescript
public readonly geoFilterInput: IResolvable | CdnEndpointGeoFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>[]

---

##### `globalDeliveryRuleInput`<sup>Optional</sup> <a name="globalDeliveryRuleInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRuleInput"></a>

```typescript
public readonly globalDeliveryRuleInput: CdnEndpointGlobalDeliveryRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCompressionEnabledInput`<sup>Optional</sup> <a name="isCompressionEnabledInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabledInput"></a>

```typescript
public readonly isCompressionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHttpAllowedInput`<sup>Optional</sup> <a name="isHttpAllowedInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowedInput"></a>

```typescript
public readonly isHttpAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHttpsAllowedInput`<sup>Optional</sup> <a name="isHttpsAllowedInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowedInput"></a>

```typescript
public readonly isHttpsAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optimizationTypeInput`<sup>Optional</sup> <a name="optimizationTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationTypeInput"></a>

```typescript
public readonly optimizationTypeInput: string;
```

- *Type:* string

---

##### `originHostHeaderInput`<sup>Optional</sup> <a name="originHostHeaderInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeaderInput"></a>

```typescript
public readonly originHostHeaderInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originInput"></a>

```typescript
public readonly originInput: IResolvable | CdnEndpointOrigin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>[]

---

##### `originPathInput`<sup>Optional</sup> <a name="originPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPathInput"></a>

```typescript
public readonly originPathInput: string;
```

- *Type:* string

---

##### `probePathInput`<sup>Optional</sup> <a name="probePathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePathInput"></a>

```typescript
public readonly probePathInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `querystringCachingBehaviourInput`<sup>Optional</sup> <a name="querystringCachingBehaviourInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviourInput"></a>

```typescript
public readonly querystringCachingBehaviourInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CdnEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

---

##### `contentTypesToCompress`<sup>Required</sup> <a name="contentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompress"></a>

```typescript
public readonly contentTypesToCompress: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCompressionEnabled`<sup>Required</sup> <a name="isCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabled"></a>

```typescript
public readonly isCompressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHttpAllowed`<sup>Required</sup> <a name="isHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowed"></a>

```typescript
public readonly isHttpAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHttpsAllowed`<sup>Required</sup> <a name="isHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowed"></a>

```typescript
public readonly isHttpsAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `optimizationType`<sup>Required</sup> <a name="optimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationType"></a>

```typescript
public readonly optimizationType: string;
```

- *Type:* string

---

##### `originHostHeader`<sup>Required</sup> <a name="originHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeader"></a>

```typescript
public readonly originHostHeader: string;
```

- *Type:* string

---

##### `originPath`<sup>Required</sup> <a name="originPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPath"></a>

```typescript
public readonly originPath: string;
```

- *Type:* string

---

##### `probePath`<sup>Required</sup> <a name="probePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePath"></a>

```typescript
public readonly probePath: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `querystringCachingBehaviour`<sup>Required</sup> <a name="querystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviour"></a>

```typescript
public readonly querystringCachingBehaviour: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnEndpointConfig <a name="CdnEndpointConfig" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointConfig: cdnEndpoint.CdnEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.origin">origin</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>[]</code> | origin block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.contentTypesToCompress">contentTypesToCompress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.deliveryRule">deliveryRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>[]</code> | delivery_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.geoFilter">geoFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>[]</code> | geo_filter block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.globalDeliveryRule">globalDeliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | global_delivery_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isCompressionEnabled">isCompressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpAllowed">isHttpAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpsAllowed">isHttpsAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.optimizationType">optimizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originHostHeader">originHostHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originPath">originPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.probePath">probePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.querystringCachingBehaviour">querystringCachingBehaviour</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.origin"></a>

```typescript
public readonly origin: IResolvable | CdnEndpointOrigin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>[]

origin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#origin CdnEndpoint#origin}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}.

---

##### `contentTypesToCompress`<sup>Optional</sup> <a name="contentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.contentTypesToCompress"></a>

```typescript
public readonly contentTypesToCompress: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}.

---

##### `deliveryRule`<sup>Optional</sup> <a name="deliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.deliveryRule"></a>

```typescript
public readonly deliveryRule: IResolvable | CdnEndpointDeliveryRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>[]

delivery_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#delivery_rule CdnEndpoint#delivery_rule}

---

##### `geoFilter`<sup>Optional</sup> <a name="geoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.geoFilter"></a>

```typescript
public readonly geoFilter: IResolvable | CdnEndpointGeoFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>[]

geo_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#geo_filter CdnEndpoint#geo_filter}

---

##### `globalDeliveryRule`<sup>Optional</sup> <a name="globalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.globalDeliveryRule"></a>

```typescript
public readonly globalDeliveryRule: CdnEndpointGlobalDeliveryRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

global_delivery_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#global_delivery_rule CdnEndpoint#global_delivery_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompressionEnabled`<sup>Optional</sup> <a name="isCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isCompressionEnabled"></a>

```typescript
public readonly isCompressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}.

---

##### `isHttpAllowed`<sup>Optional</sup> <a name="isHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpAllowed"></a>

```typescript
public readonly isHttpAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}.

---

##### `isHttpsAllowed`<sup>Optional</sup> <a name="isHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpsAllowed"></a>

```typescript
public readonly isHttpsAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}.

---

##### `optimizationType`<sup>Optional</sup> <a name="optimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.optimizationType"></a>

```typescript
public readonly optimizationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}.

---

##### `originHostHeader`<sup>Optional</sup> <a name="originHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originHostHeader"></a>

```typescript
public readonly originHostHeader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}.

---

##### `originPath`<sup>Optional</sup> <a name="originPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originPath"></a>

```typescript
public readonly originPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}.

---

##### `probePath`<sup>Optional</sup> <a name="probePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.probePath"></a>

```typescript
public readonly probePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}.

---

##### `querystringCachingBehaviour`<sup>Optional</sup> <a name="querystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.querystringCachingBehaviour"></a>

```typescript
public readonly querystringCachingBehaviour: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#timeouts CdnEndpoint#timeouts}

---

### CdnEndpointDeliveryRule <a name="CdnEndpointDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRule: cdnEndpoint.CdnEndpointDeliveryRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#order CdnEndpoint#order}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheExpirationAction">cacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | cache_expiration_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheKeyQueryStringAction">cacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | cache_key_query_string_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cookiesCondition">cookiesCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>[]</code> | cookies_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.deviceCondition">deviceCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | device_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.httpVersionCondition">httpVersionCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>[]</code> | http_version_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyRequestHeaderAction">modifyRequestHeaderAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>[]</code> | modify_request_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyResponseHeaderAction">modifyResponseHeaderAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>[]</code> | modify_response_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.postArgCondition">postArgCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>[]</code> | post_arg_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.queryStringCondition">queryStringCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>[]</code> | query_string_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.remoteAddressCondition">remoteAddressCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>[]</code> | remote_address_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestBodyCondition">requestBodyCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>[]</code> | request_body_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestHeaderCondition">requestHeaderCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>[]</code> | request_header_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestMethodCondition">requestMethodCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | request_method_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestSchemeCondition">requestSchemeCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | request_scheme_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestUriCondition">requestUriCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>[]</code> | request_uri_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileExtensionCondition">urlFileExtensionCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>[]</code> | url_file_extension_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileNameCondition">urlFileNameCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>[]</code> | url_file_name_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlPathCondition">urlPathCondition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>[]</code> | url_path_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | url_redirect_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | url_rewrite_action block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#order CdnEndpoint#order}.

---

##### `cacheExpirationAction`<sup>Optional</sup> <a name="cacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheExpirationAction"></a>

```typescript
public readonly cacheExpirationAction: CdnEndpointDeliveryRuleCacheExpirationAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

cache_expiration_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#cache_expiration_action CdnEndpoint#cache_expiration_action}

---

##### `cacheKeyQueryStringAction`<sup>Optional</sup> <a name="cacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheKeyQueryStringAction"></a>

```typescript
public readonly cacheKeyQueryStringAction: CdnEndpointDeliveryRuleCacheKeyQueryStringAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

cache_key_query_string_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#cache_key_query_string_action CdnEndpoint#cache_key_query_string_action}

---

##### `cookiesCondition`<sup>Optional</sup> <a name="cookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cookiesCondition"></a>

```typescript
public readonly cookiesCondition: IResolvable | CdnEndpointDeliveryRuleCookiesCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>[]

cookies_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#cookies_condition CdnEndpoint#cookies_condition}

---

##### `deviceCondition`<sup>Optional</sup> <a name="deviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.deviceCondition"></a>

```typescript
public readonly deviceCondition: CdnEndpointDeliveryRuleDeviceCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

device_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#device_condition CdnEndpoint#device_condition}

---

##### `httpVersionCondition`<sup>Optional</sup> <a name="httpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.httpVersionCondition"></a>

```typescript
public readonly httpVersionCondition: IResolvable | CdnEndpointDeliveryRuleHttpVersionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>[]

http_version_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#http_version_condition CdnEndpoint#http_version_condition}

---

##### `modifyRequestHeaderAction`<sup>Optional</sup> <a name="modifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyRequestHeaderAction"></a>

```typescript
public readonly modifyRequestHeaderAction: IResolvable | CdnEndpointDeliveryRuleModifyRequestHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>[]

modify_request_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#modify_request_header_action CdnEndpoint#modify_request_header_action}

---

##### `modifyResponseHeaderAction`<sup>Optional</sup> <a name="modifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyResponseHeaderAction"></a>

```typescript
public readonly modifyResponseHeaderAction: IResolvable | CdnEndpointDeliveryRuleModifyResponseHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>[]

modify_response_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#modify_response_header_action CdnEndpoint#modify_response_header_action}

---

##### `postArgCondition`<sup>Optional</sup> <a name="postArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.postArgCondition"></a>

```typescript
public readonly postArgCondition: IResolvable | CdnEndpointDeliveryRulePostArgCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>[]

post_arg_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#post_arg_condition CdnEndpoint#post_arg_condition}

---

##### `queryStringCondition`<sup>Optional</sup> <a name="queryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.queryStringCondition"></a>

```typescript
public readonly queryStringCondition: IResolvable | CdnEndpointDeliveryRuleQueryStringCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>[]

query_string_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#query_string_condition CdnEndpoint#query_string_condition}

---

##### `remoteAddressCondition`<sup>Optional</sup> <a name="remoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.remoteAddressCondition"></a>

```typescript
public readonly remoteAddressCondition: IResolvable | CdnEndpointDeliveryRuleRemoteAddressCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>[]

remote_address_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#remote_address_condition CdnEndpoint#remote_address_condition}

---

##### `requestBodyCondition`<sup>Optional</sup> <a name="requestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestBodyCondition"></a>

```typescript
public readonly requestBodyCondition: IResolvable | CdnEndpointDeliveryRuleRequestBodyCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>[]

request_body_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#request_body_condition CdnEndpoint#request_body_condition}

---

##### `requestHeaderCondition`<sup>Optional</sup> <a name="requestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestHeaderCondition"></a>

```typescript
public readonly requestHeaderCondition: IResolvable | CdnEndpointDeliveryRuleRequestHeaderCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>[]

request_header_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#request_header_condition CdnEndpoint#request_header_condition}

---

##### `requestMethodCondition`<sup>Optional</sup> <a name="requestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestMethodCondition"></a>

```typescript
public readonly requestMethodCondition: CdnEndpointDeliveryRuleRequestMethodCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

request_method_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#request_method_condition CdnEndpoint#request_method_condition}

---

##### `requestSchemeCondition`<sup>Optional</sup> <a name="requestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestSchemeCondition"></a>

```typescript
public readonly requestSchemeCondition: CdnEndpointDeliveryRuleRequestSchemeCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

request_scheme_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#request_scheme_condition CdnEndpoint#request_scheme_condition}

---

##### `requestUriCondition`<sup>Optional</sup> <a name="requestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestUriCondition"></a>

```typescript
public readonly requestUriCondition: IResolvable | CdnEndpointDeliveryRuleRequestUriCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>[]

request_uri_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#request_uri_condition CdnEndpoint#request_uri_condition}

---

##### `urlFileExtensionCondition`<sup>Optional</sup> <a name="urlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileExtensionCondition"></a>

```typescript
public readonly urlFileExtensionCondition: IResolvable | CdnEndpointDeliveryRuleUrlFileExtensionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>[]

url_file_extension_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#url_file_extension_condition CdnEndpoint#url_file_extension_condition}

---

##### `urlFileNameCondition`<sup>Optional</sup> <a name="urlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileNameCondition"></a>

```typescript
public readonly urlFileNameCondition: IResolvable | CdnEndpointDeliveryRuleUrlFileNameCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>[]

url_file_name_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#url_file_name_condition CdnEndpoint#url_file_name_condition}

---

##### `urlPathCondition`<sup>Optional</sup> <a name="urlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlPathCondition"></a>

```typescript
public readonly urlPathCondition: IResolvable | CdnEndpointDeliveryRuleUrlPathCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>[]

url_path_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#url_path_condition CdnEndpoint#url_path_condition}

---

##### `urlRedirectAction`<sup>Optional</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRedirectAction"></a>

```typescript
public readonly urlRedirectAction: CdnEndpointDeliveryRuleUrlRedirectAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

url_redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#url_redirect_action CdnEndpoint#url_redirect_action}

---

##### `urlRewriteAction`<sup>Optional</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRewriteAction"></a>

```typescript
public readonly urlRewriteAction: CdnEndpointDeliveryRuleUrlRewriteAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

url_rewrite_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#url_rewrite_action CdnEndpoint#url_rewrite_action}

---

### CdnEndpointDeliveryRuleCacheExpirationAction <a name="CdnEndpointDeliveryRuleCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleCacheExpirationAction: cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.behavior">behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}.

---

### CdnEndpointDeliveryRuleCacheKeyQueryStringAction <a name="CdnEndpointDeliveryRuleCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleCacheKeyQueryStringAction: cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.behavior">behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}.

---

### CdnEndpointDeliveryRuleCookiesCondition <a name="CdnEndpointDeliveryRuleCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleCookiesCondition: cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleDeviceCondition <a name="CdnEndpointDeliveryRuleDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleDeviceCondition: cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleHttpVersionCondition <a name="CdnEndpointDeliveryRuleHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleHttpVersionCondition: cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleModifyRequestHeaderAction <a name="CdnEndpointDeliveryRuleModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleModifyRequestHeaderAction: cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointDeliveryRuleModifyResponseHeaderAction <a name="CdnEndpointDeliveryRuleModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleModifyResponseHeaderAction: cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointDeliveryRulePostArgCondition <a name="CdnEndpointDeliveryRulePostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRulePostArgCondition: cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleQueryStringCondition <a name="CdnEndpointDeliveryRuleQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleQueryStringCondition: cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRemoteAddressCondition <a name="CdnEndpointDeliveryRuleRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleRemoteAddressCondition: cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

### CdnEndpointDeliveryRuleRequestBodyCondition <a name="CdnEndpointDeliveryRuleRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleRequestBodyCondition: cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRequestHeaderCondition <a name="CdnEndpointDeliveryRuleRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleRequestHeaderCondition: cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.selector">selector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRequestMethodCondition <a name="CdnEndpointDeliveryRuleRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleRequestMethodCondition: cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleRequestSchemeCondition <a name="CdnEndpointDeliveryRuleRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleRequestSchemeCondition: cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleRequestUriCondition <a name="CdnEndpointDeliveryRuleRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleRequestUriCondition: cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlFileExtensionCondition <a name="CdnEndpointDeliveryRuleUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleUrlFileExtensionCondition: cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlFileNameCondition <a name="CdnEndpointDeliveryRuleUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleUrlFileNameCondition: cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlPathCondition <a name="CdnEndpointDeliveryRuleUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleUrlPathCondition: cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.matchValues">matchValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.transforms">transforms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlRedirectAction <a name="CdnEndpointDeliveryRuleUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleUrlRedirectAction: cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.redirectType">redirectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.fragment">fragment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.queryString">queryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}. |

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.redirectType"></a>

```typescript
public readonly redirectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}.

---

##### `fragment`<sup>Optional</sup> <a name="fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.fragment"></a>

```typescript
public readonly fragment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}.

---

### CdnEndpointDeliveryRuleUrlRewriteAction <a name="CdnEndpointDeliveryRuleUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointDeliveryRuleUrlRewriteAction: cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.sourcePattern">sourcePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}.

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.sourcePattern"></a>

```typescript
public readonly sourcePattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}.

---

##### `preserveUnmatchedPath`<sup>Optional</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath"></a>

```typescript
public readonly preserveUnmatchedPath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}.

---

### CdnEndpointGeoFilter <a name="CdnEndpointGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointGeoFilter: cdnEndpoint.CdnEndpointGeoFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.countryCodes">countryCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#country_codes CdnEndpoint#country_codes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.relativePath">relativePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#relative_path CdnEndpoint#relative_path}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `countryCodes`<sup>Required</sup> <a name="countryCodes" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.countryCodes"></a>

```typescript
public readonly countryCodes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#country_codes CdnEndpoint#country_codes}.

---

##### `relativePath`<sup>Required</sup> <a name="relativePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.relativePath"></a>

```typescript
public readonly relativePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#relative_path CdnEndpoint#relative_path}.

---

### CdnEndpointGlobalDeliveryRule <a name="CdnEndpointGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointGlobalDeliveryRule: cdnEndpoint.CdnEndpointGlobalDeliveryRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheExpirationAction">cacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | cache_expiration_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheKeyQueryStringAction">cacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | cache_key_query_string_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyRequestHeaderAction">modifyRequestHeaderAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>[]</code> | modify_request_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyResponseHeaderAction">modifyResponseHeaderAction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>[]</code> | modify_response_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | url_redirect_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | url_rewrite_action block. |

---

##### `cacheExpirationAction`<sup>Optional</sup> <a name="cacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheExpirationAction"></a>

```typescript
public readonly cacheExpirationAction: CdnEndpointGlobalDeliveryRuleCacheExpirationAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

cache_expiration_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#cache_expiration_action CdnEndpoint#cache_expiration_action}

---

##### `cacheKeyQueryStringAction`<sup>Optional</sup> <a name="cacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheKeyQueryStringAction"></a>

```typescript
public readonly cacheKeyQueryStringAction: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

cache_key_query_string_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#cache_key_query_string_action CdnEndpoint#cache_key_query_string_action}

---

##### `modifyRequestHeaderAction`<sup>Optional</sup> <a name="modifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyRequestHeaderAction"></a>

```typescript
public readonly modifyRequestHeaderAction: IResolvable | CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>[]

modify_request_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#modify_request_header_action CdnEndpoint#modify_request_header_action}

---

##### `modifyResponseHeaderAction`<sup>Optional</sup> <a name="modifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyResponseHeaderAction"></a>

```typescript
public readonly modifyResponseHeaderAction: IResolvable | CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>[]

modify_response_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#modify_response_header_action CdnEndpoint#modify_response_header_action}

---

##### `urlRedirectAction`<sup>Optional</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRedirectAction"></a>

```typescript
public readonly urlRedirectAction: CdnEndpointGlobalDeliveryRuleUrlRedirectAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

url_redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#url_redirect_action CdnEndpoint#url_redirect_action}

---

##### `urlRewriteAction`<sup>Optional</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRewriteAction"></a>

```typescript
public readonly urlRewriteAction: CdnEndpointGlobalDeliveryRuleUrlRewriteAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

url_rewrite_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#url_rewrite_action CdnEndpoint#url_rewrite_action}

---

### CdnEndpointGlobalDeliveryRuleCacheExpirationAction <a name="CdnEndpointGlobalDeliveryRuleCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointGlobalDeliveryRuleCacheExpirationAction: cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.behavior">behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}.

---

### CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction <a name="CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction: cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.behavior">behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}.

---

### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction: cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction: cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointGlobalDeliveryRuleUrlRedirectAction <a name="CdnEndpointGlobalDeliveryRuleUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointGlobalDeliveryRuleUrlRedirectAction: cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.redirectType">redirectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.fragment">fragment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.queryString">queryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}. |

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.redirectType"></a>

```typescript
public readonly redirectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}.

---

##### `fragment`<sup>Optional</sup> <a name="fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.fragment"></a>

```typescript
public readonly fragment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}.

---

### CdnEndpointGlobalDeliveryRuleUrlRewriteAction <a name="CdnEndpointGlobalDeliveryRuleUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointGlobalDeliveryRuleUrlRewriteAction: cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.sourcePattern">sourcePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}.

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.sourcePattern"></a>

```typescript
public readonly sourcePattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}.

---

##### `preserveUnmatchedPath`<sup>Optional</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath"></a>

```typescript
public readonly preserveUnmatchedPath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}.

---

### CdnEndpointOrigin <a name="CdnEndpointOrigin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointOrigin: cdnEndpoint.CdnEndpointOrigin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#host_name CdnEndpoint#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpPort">httpPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#http_port CdnEndpoint#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpsPort">httpsPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#https_port CdnEndpoint#https_port}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#host_name CdnEndpoint#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `httpPort`<sup>Optional</sup> <a name="httpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#http_port CdnEndpoint#http_port}.

---

##### `httpsPort`<sup>Optional</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#https_port CdnEndpoint#https_port}.

---

### CdnEndpointTimeouts <a name="CdnEndpointTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

const cdnEndpointTimeouts: cdnEndpoint.CdnEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#create CdnEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#delete CdnEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#read CdnEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#update CdnEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#create CdnEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#delete CdnEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#read CdnEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/cdn_endpoint#update CdnEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnEndpointDeliveryRuleCacheExpirationActionOutputReference <a name="CdnEndpointDeliveryRuleCacheExpirationActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointDeliveryRuleCacheExpirationAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---


### CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference <a name="CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointDeliveryRuleCacheKeyQueryStringAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---


### CdnEndpointDeliveryRuleCookiesConditionList <a name="CdnEndpointDeliveryRuleCookiesConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleCookiesConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleCookiesCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>[]

---


### CdnEndpointDeliveryRuleCookiesConditionOutputReference <a name="CdnEndpointDeliveryRuleCookiesConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleCookiesCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>

---


### CdnEndpointDeliveryRuleDeviceConditionOutputReference <a name="CdnEndpointDeliveryRuleDeviceConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointDeliveryRuleDeviceCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---


### CdnEndpointDeliveryRuleHttpVersionConditionList <a name="CdnEndpointDeliveryRuleHttpVersionConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleHttpVersionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleHttpVersionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>[]

---


### CdnEndpointDeliveryRuleHttpVersionConditionOutputReference <a name="CdnEndpointDeliveryRuleHttpVersionConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleHttpVersionCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>

---


### CdnEndpointDeliveryRuleList <a name="CdnEndpointDeliveryRuleList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>[]

---


### CdnEndpointDeliveryRuleModifyRequestHeaderActionList <a name="CdnEndpointDeliveryRuleModifyRequestHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleModifyRequestHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>[]

---


### CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference <a name="CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleModifyRequestHeaderAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>

---


### CdnEndpointDeliveryRuleModifyResponseHeaderActionList <a name="CdnEndpointDeliveryRuleModifyResponseHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleModifyResponseHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>[]

---


### CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference <a name="CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleModifyResponseHeaderAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>

---


### CdnEndpointDeliveryRuleOutputReference <a name="CdnEndpointDeliveryRuleOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction">putCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction">putCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition">putCookiesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition">putDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition">putHttpVersionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction">putModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction">putModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition">putPostArgCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition">putQueryStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition">putRemoteAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition">putRequestBodyCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition">putRequestHeaderCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition">putRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition">putRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition">putRequestUriCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition">putUrlFileExtensionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition">putUrlFileNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition">putUrlPathCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction">putUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction">putUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheExpirationAction">resetCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheKeyQueryStringAction">resetCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCookiesCondition">resetCookiesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetDeviceCondition">resetDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetHttpVersionCondition">resetHttpVersionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyRequestHeaderAction">resetModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyResponseHeaderAction">resetModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetPostArgCondition">resetPostArgCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetQueryStringCondition">resetQueryStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRemoteAddressCondition">resetRemoteAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestBodyCondition">resetRequestBodyCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestHeaderCondition">resetRequestHeaderCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestMethodCondition">resetRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestSchemeCondition">resetRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestUriCondition">resetRequestUriCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileExtensionCondition">resetUrlFileExtensionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileNameCondition">resetUrlFileNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlPathCondition">resetUrlPathCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRedirectAction">resetUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRewriteAction">resetUrlRewriteAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheExpirationAction` <a name="putCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction"></a>

```typescript
public putCacheExpirationAction(value: CdnEndpointDeliveryRuleCacheExpirationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---

##### `putCacheKeyQueryStringAction` <a name="putCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction"></a>

```typescript
public putCacheKeyQueryStringAction(value: CdnEndpointDeliveryRuleCacheKeyQueryStringAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `putCookiesCondition` <a name="putCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition"></a>

```typescript
public putCookiesCondition(value: IResolvable | CdnEndpointDeliveryRuleCookiesCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>[]

---

##### `putDeviceCondition` <a name="putDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition"></a>

```typescript
public putDeviceCondition(value: CdnEndpointDeliveryRuleDeviceCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---

##### `putHttpVersionCondition` <a name="putHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition"></a>

```typescript
public putHttpVersionCondition(value: IResolvable | CdnEndpointDeliveryRuleHttpVersionCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>[]

---

##### `putModifyRequestHeaderAction` <a name="putModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction"></a>

```typescript
public putModifyRequestHeaderAction(value: IResolvable | CdnEndpointDeliveryRuleModifyRequestHeaderAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>[]

---

##### `putModifyResponseHeaderAction` <a name="putModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction"></a>

```typescript
public putModifyResponseHeaderAction(value: IResolvable | CdnEndpointDeliveryRuleModifyResponseHeaderAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>[]

---

##### `putPostArgCondition` <a name="putPostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition"></a>

```typescript
public putPostArgCondition(value: IResolvable | CdnEndpointDeliveryRulePostArgCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>[]

---

##### `putQueryStringCondition` <a name="putQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition"></a>

```typescript
public putQueryStringCondition(value: IResolvable | CdnEndpointDeliveryRuleQueryStringCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>[]

---

##### `putRemoteAddressCondition` <a name="putRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition"></a>

```typescript
public putRemoteAddressCondition(value: IResolvable | CdnEndpointDeliveryRuleRemoteAddressCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>[]

---

##### `putRequestBodyCondition` <a name="putRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition"></a>

```typescript
public putRequestBodyCondition(value: IResolvable | CdnEndpointDeliveryRuleRequestBodyCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>[]

---

##### `putRequestHeaderCondition` <a name="putRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition"></a>

```typescript
public putRequestHeaderCondition(value: IResolvable | CdnEndpointDeliveryRuleRequestHeaderCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>[]

---

##### `putRequestMethodCondition` <a name="putRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition"></a>

```typescript
public putRequestMethodCondition(value: CdnEndpointDeliveryRuleRequestMethodCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---

##### `putRequestSchemeCondition` <a name="putRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition"></a>

```typescript
public putRequestSchemeCondition(value: CdnEndpointDeliveryRuleRequestSchemeCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---

##### `putRequestUriCondition` <a name="putRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition"></a>

```typescript
public putRequestUriCondition(value: IResolvable | CdnEndpointDeliveryRuleRequestUriCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>[]

---

##### `putUrlFileExtensionCondition` <a name="putUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition"></a>

```typescript
public putUrlFileExtensionCondition(value: IResolvable | CdnEndpointDeliveryRuleUrlFileExtensionCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>[]

---

##### `putUrlFileNameCondition` <a name="putUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition"></a>

```typescript
public putUrlFileNameCondition(value: IResolvable | CdnEndpointDeliveryRuleUrlFileNameCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>[]

---

##### `putUrlPathCondition` <a name="putUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition"></a>

```typescript
public putUrlPathCondition(value: IResolvable | CdnEndpointDeliveryRuleUrlPathCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>[]

---

##### `putUrlRedirectAction` <a name="putUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction"></a>

```typescript
public putUrlRedirectAction(value: CdnEndpointDeliveryRuleUrlRedirectAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---

##### `putUrlRewriteAction` <a name="putUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction"></a>

```typescript
public putUrlRewriteAction(value: CdnEndpointDeliveryRuleUrlRewriteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---

##### `resetCacheExpirationAction` <a name="resetCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheExpirationAction"></a>

```typescript
public resetCacheExpirationAction(): void
```

##### `resetCacheKeyQueryStringAction` <a name="resetCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheKeyQueryStringAction"></a>

```typescript
public resetCacheKeyQueryStringAction(): void
```

##### `resetCookiesCondition` <a name="resetCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCookiesCondition"></a>

```typescript
public resetCookiesCondition(): void
```

##### `resetDeviceCondition` <a name="resetDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetDeviceCondition"></a>

```typescript
public resetDeviceCondition(): void
```

##### `resetHttpVersionCondition` <a name="resetHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetHttpVersionCondition"></a>

```typescript
public resetHttpVersionCondition(): void
```

##### `resetModifyRequestHeaderAction` <a name="resetModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyRequestHeaderAction"></a>

```typescript
public resetModifyRequestHeaderAction(): void
```

##### `resetModifyResponseHeaderAction` <a name="resetModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyResponseHeaderAction"></a>

```typescript
public resetModifyResponseHeaderAction(): void
```

##### `resetPostArgCondition` <a name="resetPostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetPostArgCondition"></a>

```typescript
public resetPostArgCondition(): void
```

##### `resetQueryStringCondition` <a name="resetQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetQueryStringCondition"></a>

```typescript
public resetQueryStringCondition(): void
```

##### `resetRemoteAddressCondition` <a name="resetRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRemoteAddressCondition"></a>

```typescript
public resetRemoteAddressCondition(): void
```

##### `resetRequestBodyCondition` <a name="resetRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestBodyCondition"></a>

```typescript
public resetRequestBodyCondition(): void
```

##### `resetRequestHeaderCondition` <a name="resetRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestHeaderCondition"></a>

```typescript
public resetRequestHeaderCondition(): void
```

##### `resetRequestMethodCondition` <a name="resetRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestMethodCondition"></a>

```typescript
public resetRequestMethodCondition(): void
```

##### `resetRequestSchemeCondition` <a name="resetRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestSchemeCondition"></a>

```typescript
public resetRequestSchemeCondition(): void
```

##### `resetRequestUriCondition` <a name="resetRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestUriCondition"></a>

```typescript
public resetRequestUriCondition(): void
```

##### `resetUrlFileExtensionCondition` <a name="resetUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileExtensionCondition"></a>

```typescript
public resetUrlFileExtensionCondition(): void
```

##### `resetUrlFileNameCondition` <a name="resetUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileNameCondition"></a>

```typescript
public resetUrlFileNameCondition(): void
```

##### `resetUrlPathCondition` <a name="resetUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlPathCondition"></a>

```typescript
public resetUrlPathCondition(): void
```

##### `resetUrlRedirectAction` <a name="resetUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRedirectAction"></a>

```typescript
public resetUrlRedirectAction(): void
```

##### `resetUrlRewriteAction` <a name="resetUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRewriteAction"></a>

```typescript
public resetUrlRewriteAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationAction">cacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointDeliveryRuleCacheExpirationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringAction">cacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesCondition">cookiesCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList">CdnEndpointDeliveryRuleCookiesConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceCondition">deviceCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference">CdnEndpointDeliveryRuleDeviceConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionCondition">httpVersionCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList">CdnEndpointDeliveryRuleHttpVersionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderAction">modifyRequestHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList">CdnEndpointDeliveryRuleModifyRequestHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderAction">modifyResponseHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList">CdnEndpointDeliveryRuleModifyResponseHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgCondition">postArgCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList">CdnEndpointDeliveryRulePostArgConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringCondition">queryStringCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList">CdnEndpointDeliveryRuleQueryStringConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressCondition">remoteAddressCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList">CdnEndpointDeliveryRuleRemoteAddressConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyCondition">requestBodyCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList">CdnEndpointDeliveryRuleRequestBodyConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderCondition">requestHeaderCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList">CdnEndpointDeliveryRuleRequestHeaderConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodCondition">requestMethodCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference">CdnEndpointDeliveryRuleRequestMethodConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeCondition">requestSchemeCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference">CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriCondition">requestUriCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList">CdnEndpointDeliveryRuleRequestUriConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionCondition">urlFileExtensionCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList">CdnEndpointDeliveryRuleUrlFileExtensionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameCondition">urlFileNameCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList">CdnEndpointDeliveryRuleUrlFileNameConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathCondition">urlPathCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList">CdnEndpointDeliveryRuleUrlPathConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointDeliveryRuleUrlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointDeliveryRuleUrlRewriteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationActionInput">cacheExpirationActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput">cacheKeyQueryStringActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesConditionInput">cookiesConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceConditionInput">deviceConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionConditionInput">httpVersionConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput">modifyRequestHeaderActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput">modifyResponseHeaderActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgConditionInput">postArgConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringConditionInput">queryStringConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressConditionInput">remoteAddressConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyConditionInput">requestBodyConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderConditionInput">requestHeaderConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodConditionInput">requestMethodConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeConditionInput">requestSchemeConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriConditionInput">requestUriConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionConditionInput">urlFileExtensionConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameConditionInput">urlFileNameConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathConditionInput">urlPathConditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectActionInput">urlRedirectActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteActionInput">urlRewriteActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheExpirationAction`<sup>Required</sup> <a name="cacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationAction"></a>

```typescript
public readonly cacheExpirationAction: CdnEndpointDeliveryRuleCacheExpirationActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointDeliveryRuleCacheExpirationActionOutputReference</a>

---

##### `cacheKeyQueryStringAction`<sup>Required</sup> <a name="cacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringAction"></a>

```typescript
public readonly cacheKeyQueryStringAction: CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference</a>

---

##### `cookiesCondition`<sup>Required</sup> <a name="cookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesCondition"></a>

```typescript
public readonly cookiesCondition: CdnEndpointDeliveryRuleCookiesConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList">CdnEndpointDeliveryRuleCookiesConditionList</a>

---

##### `deviceCondition`<sup>Required</sup> <a name="deviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceCondition"></a>

```typescript
public readonly deviceCondition: CdnEndpointDeliveryRuleDeviceConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference">CdnEndpointDeliveryRuleDeviceConditionOutputReference</a>

---

##### `httpVersionCondition`<sup>Required</sup> <a name="httpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionCondition"></a>

```typescript
public readonly httpVersionCondition: CdnEndpointDeliveryRuleHttpVersionConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList">CdnEndpointDeliveryRuleHttpVersionConditionList</a>

---

##### `modifyRequestHeaderAction`<sup>Required</sup> <a name="modifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderAction"></a>

```typescript
public readonly modifyRequestHeaderAction: CdnEndpointDeliveryRuleModifyRequestHeaderActionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList">CdnEndpointDeliveryRuleModifyRequestHeaderActionList</a>

---

##### `modifyResponseHeaderAction`<sup>Required</sup> <a name="modifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderAction"></a>

```typescript
public readonly modifyResponseHeaderAction: CdnEndpointDeliveryRuleModifyResponseHeaderActionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList">CdnEndpointDeliveryRuleModifyResponseHeaderActionList</a>

---

##### `postArgCondition`<sup>Required</sup> <a name="postArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgCondition"></a>

```typescript
public readonly postArgCondition: CdnEndpointDeliveryRulePostArgConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList">CdnEndpointDeliveryRulePostArgConditionList</a>

---

##### `queryStringCondition`<sup>Required</sup> <a name="queryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringCondition"></a>

```typescript
public readonly queryStringCondition: CdnEndpointDeliveryRuleQueryStringConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList">CdnEndpointDeliveryRuleQueryStringConditionList</a>

---

##### `remoteAddressCondition`<sup>Required</sup> <a name="remoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressCondition"></a>

```typescript
public readonly remoteAddressCondition: CdnEndpointDeliveryRuleRemoteAddressConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList">CdnEndpointDeliveryRuleRemoteAddressConditionList</a>

---

##### `requestBodyCondition`<sup>Required</sup> <a name="requestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyCondition"></a>

```typescript
public readonly requestBodyCondition: CdnEndpointDeliveryRuleRequestBodyConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList">CdnEndpointDeliveryRuleRequestBodyConditionList</a>

---

##### `requestHeaderCondition`<sup>Required</sup> <a name="requestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderCondition"></a>

```typescript
public readonly requestHeaderCondition: CdnEndpointDeliveryRuleRequestHeaderConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList">CdnEndpointDeliveryRuleRequestHeaderConditionList</a>

---

##### `requestMethodCondition`<sup>Required</sup> <a name="requestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodCondition"></a>

```typescript
public readonly requestMethodCondition: CdnEndpointDeliveryRuleRequestMethodConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference">CdnEndpointDeliveryRuleRequestMethodConditionOutputReference</a>

---

##### `requestSchemeCondition`<sup>Required</sup> <a name="requestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeCondition"></a>

```typescript
public readonly requestSchemeCondition: CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference">CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference</a>

---

##### `requestUriCondition`<sup>Required</sup> <a name="requestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriCondition"></a>

```typescript
public readonly requestUriCondition: CdnEndpointDeliveryRuleRequestUriConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList">CdnEndpointDeliveryRuleRequestUriConditionList</a>

---

##### `urlFileExtensionCondition`<sup>Required</sup> <a name="urlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionCondition"></a>

```typescript
public readonly urlFileExtensionCondition: CdnEndpointDeliveryRuleUrlFileExtensionConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList">CdnEndpointDeliveryRuleUrlFileExtensionConditionList</a>

---

##### `urlFileNameCondition`<sup>Required</sup> <a name="urlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameCondition"></a>

```typescript
public readonly urlFileNameCondition: CdnEndpointDeliveryRuleUrlFileNameConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList">CdnEndpointDeliveryRuleUrlFileNameConditionList</a>

---

##### `urlPathCondition`<sup>Required</sup> <a name="urlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathCondition"></a>

```typescript
public readonly urlPathCondition: CdnEndpointDeliveryRuleUrlPathConditionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList">CdnEndpointDeliveryRuleUrlPathConditionList</a>

---

##### `urlRedirectAction`<sup>Required</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectAction"></a>

```typescript
public readonly urlRedirectAction: CdnEndpointDeliveryRuleUrlRedirectActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointDeliveryRuleUrlRedirectActionOutputReference</a>

---

##### `urlRewriteAction`<sup>Required</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteAction"></a>

```typescript
public readonly urlRewriteAction: CdnEndpointDeliveryRuleUrlRewriteActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointDeliveryRuleUrlRewriteActionOutputReference</a>

---

##### `cacheExpirationActionInput`<sup>Optional</sup> <a name="cacheExpirationActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationActionInput"></a>

```typescript
public readonly cacheExpirationActionInput: CdnEndpointDeliveryRuleCacheExpirationAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---

##### `cacheKeyQueryStringActionInput`<sup>Optional</sup> <a name="cacheKeyQueryStringActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput"></a>

```typescript
public readonly cacheKeyQueryStringActionInput: CdnEndpointDeliveryRuleCacheKeyQueryStringAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `cookiesConditionInput`<sup>Optional</sup> <a name="cookiesConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesConditionInput"></a>

```typescript
public readonly cookiesConditionInput: IResolvable | CdnEndpointDeliveryRuleCookiesCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>[]

---

##### `deviceConditionInput`<sup>Optional</sup> <a name="deviceConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceConditionInput"></a>

```typescript
public readonly deviceConditionInput: CdnEndpointDeliveryRuleDeviceCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---

##### `httpVersionConditionInput`<sup>Optional</sup> <a name="httpVersionConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionConditionInput"></a>

```typescript
public readonly httpVersionConditionInput: IResolvable | CdnEndpointDeliveryRuleHttpVersionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>[]

---

##### `modifyRequestHeaderActionInput`<sup>Optional</sup> <a name="modifyRequestHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput"></a>

```typescript
public readonly modifyRequestHeaderActionInput: IResolvable | CdnEndpointDeliveryRuleModifyRequestHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>[]

---

##### `modifyResponseHeaderActionInput`<sup>Optional</sup> <a name="modifyResponseHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput"></a>

```typescript
public readonly modifyResponseHeaderActionInput: IResolvable | CdnEndpointDeliveryRuleModifyResponseHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `postArgConditionInput`<sup>Optional</sup> <a name="postArgConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgConditionInput"></a>

```typescript
public readonly postArgConditionInput: IResolvable | CdnEndpointDeliveryRulePostArgCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>[]

---

##### `queryStringConditionInput`<sup>Optional</sup> <a name="queryStringConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringConditionInput"></a>

```typescript
public readonly queryStringConditionInput: IResolvable | CdnEndpointDeliveryRuleQueryStringCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>[]

---

##### `remoteAddressConditionInput`<sup>Optional</sup> <a name="remoteAddressConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressConditionInput"></a>

```typescript
public readonly remoteAddressConditionInput: IResolvable | CdnEndpointDeliveryRuleRemoteAddressCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>[]

---

##### `requestBodyConditionInput`<sup>Optional</sup> <a name="requestBodyConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyConditionInput"></a>

```typescript
public readonly requestBodyConditionInput: IResolvable | CdnEndpointDeliveryRuleRequestBodyCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>[]

---

##### `requestHeaderConditionInput`<sup>Optional</sup> <a name="requestHeaderConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderConditionInput"></a>

```typescript
public readonly requestHeaderConditionInput: IResolvable | CdnEndpointDeliveryRuleRequestHeaderCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>[]

---

##### `requestMethodConditionInput`<sup>Optional</sup> <a name="requestMethodConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodConditionInput"></a>

```typescript
public readonly requestMethodConditionInput: CdnEndpointDeliveryRuleRequestMethodCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---

##### `requestSchemeConditionInput`<sup>Optional</sup> <a name="requestSchemeConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeConditionInput"></a>

```typescript
public readonly requestSchemeConditionInput: CdnEndpointDeliveryRuleRequestSchemeCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---

##### `requestUriConditionInput`<sup>Optional</sup> <a name="requestUriConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriConditionInput"></a>

```typescript
public readonly requestUriConditionInput: IResolvable | CdnEndpointDeliveryRuleRequestUriCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>[]

---

##### `urlFileExtensionConditionInput`<sup>Optional</sup> <a name="urlFileExtensionConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionConditionInput"></a>

```typescript
public readonly urlFileExtensionConditionInput: IResolvable | CdnEndpointDeliveryRuleUrlFileExtensionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>[]

---

##### `urlFileNameConditionInput`<sup>Optional</sup> <a name="urlFileNameConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameConditionInput"></a>

```typescript
public readonly urlFileNameConditionInput: IResolvable | CdnEndpointDeliveryRuleUrlFileNameCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>[]

---

##### `urlPathConditionInput`<sup>Optional</sup> <a name="urlPathConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathConditionInput"></a>

```typescript
public readonly urlPathConditionInput: IResolvable | CdnEndpointDeliveryRuleUrlPathCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>[]

---

##### `urlRedirectActionInput`<sup>Optional</sup> <a name="urlRedirectActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectActionInput"></a>

```typescript
public readonly urlRedirectActionInput: CdnEndpointDeliveryRuleUrlRedirectAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---

##### `urlRewriteActionInput`<sup>Optional</sup> <a name="urlRewriteActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteActionInput"></a>

```typescript
public readonly urlRewriteActionInput: CdnEndpointDeliveryRuleUrlRewriteAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>

---


### CdnEndpointDeliveryRulePostArgConditionList <a name="CdnEndpointDeliveryRulePostArgConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRulePostArgConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRulePostArgCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>[]

---


### CdnEndpointDeliveryRulePostArgConditionOutputReference <a name="CdnEndpointDeliveryRulePostArgConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRulePostArgCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>

---


### CdnEndpointDeliveryRuleQueryStringConditionList <a name="CdnEndpointDeliveryRuleQueryStringConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleQueryStringConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleQueryStringCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>[]

---


### CdnEndpointDeliveryRuleQueryStringConditionOutputReference <a name="CdnEndpointDeliveryRuleQueryStringConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleQueryStringCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>

---


### CdnEndpointDeliveryRuleRemoteAddressConditionList <a name="CdnEndpointDeliveryRuleRemoteAddressConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleRemoteAddressCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>[]

---


### CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference <a name="CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleRemoteAddressCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>

---


### CdnEndpointDeliveryRuleRequestBodyConditionList <a name="CdnEndpointDeliveryRuleRequestBodyConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleRequestBodyConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleRequestBodyCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>[]

---


### CdnEndpointDeliveryRuleRequestBodyConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestBodyConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleRequestBodyCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>

---


### CdnEndpointDeliveryRuleRequestHeaderConditionList <a name="CdnEndpointDeliveryRuleRequestHeaderConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleRequestHeaderCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>[]

---


### CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleRequestHeaderCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>

---


### CdnEndpointDeliveryRuleRequestMethodConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestMethodConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointDeliveryRuleRequestMethodCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---


### CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointDeliveryRuleRequestSchemeCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---


### CdnEndpointDeliveryRuleRequestUriConditionList <a name="CdnEndpointDeliveryRuleRequestUriConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleRequestUriConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleRequestUriCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>[]

---


### CdnEndpointDeliveryRuleRequestUriConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestUriConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleRequestUriCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>

---


### CdnEndpointDeliveryRuleUrlFileExtensionConditionList <a name="CdnEndpointDeliveryRuleUrlFileExtensionConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleUrlFileExtensionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>[]

---


### CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleUrlFileExtensionCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>

---


### CdnEndpointDeliveryRuleUrlFileNameConditionList <a name="CdnEndpointDeliveryRuleUrlFileNameConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleUrlFileNameCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>[]

---


### CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleUrlFileNameCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>

---


### CdnEndpointDeliveryRuleUrlPathConditionList <a name="CdnEndpointDeliveryRuleUrlPathConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get"></a>

```typescript
public get(index: number): CdnEndpointDeliveryRuleUrlPathConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleUrlPathCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>[]

---


### CdnEndpointDeliveryRuleUrlPathConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlPathConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetMatchValues"></a>

```typescript
public resetMatchValues(): void
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetNegateCondition"></a>

```typescript
public resetNegateCondition(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetTransforms"></a>

```typescript
public resetTransforms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValues">matchValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transforms">transforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValuesInput"></a>

```typescript
public readonly matchValuesInput: string[];
```

- *Type:* string[]

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateConditionInput"></a>

```typescript
public readonly negateConditionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transformsInput"></a>

```typescript
public readonly transformsInput: string[];
```

- *Type:* string[]

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValues"></a>

```typescript
public readonly matchValues: string[];
```

- *Type:* string[]

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateCondition"></a>

```typescript
public readonly negateCondition: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transforms"></a>

```typescript
public readonly transforms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointDeliveryRuleUrlPathCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>

---


### CdnEndpointDeliveryRuleUrlRedirectActionOutputReference <a name="CdnEndpointDeliveryRuleUrlRedirectActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetFragment">resetFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFragment` <a name="resetFragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetFragment"></a>

```typescript
public resetFragment(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput">fragmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput">redirectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragment">fragment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectType">redirectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fragmentInput`<sup>Optional</sup> <a name="fragmentInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput"></a>

```typescript
public readonly fragmentInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `redirectTypeInput`<sup>Optional</sup> <a name="redirectTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput"></a>

```typescript
public readonly redirectTypeInput: string;
```

- *Type:* string

---

##### `fragment`<sup>Required</sup> <a name="fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragment"></a>

```typescript
public readonly fragment: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectType"></a>

```typescript
public readonly redirectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointDeliveryRuleUrlRedirectAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---


### CdnEndpointDeliveryRuleUrlRewriteActionOutputReference <a name="CdnEndpointDeliveryRuleUrlRewriteActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath">resetPreserveUnmatchedPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveUnmatchedPath` <a name="resetPreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath"></a>

```typescript
public resetPreserveUnmatchedPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput">preserveUnmatchedPathInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput">sourcePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern">sourcePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `preserveUnmatchedPathInput`<sup>Optional</sup> <a name="preserveUnmatchedPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput"></a>

```typescript
public readonly preserveUnmatchedPathInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcePatternInput`<sup>Optional</sup> <a name="sourcePatternInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput"></a>

```typescript
public readonly sourcePatternInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `preserveUnmatchedPath`<sup>Required</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath"></a>

```typescript
public readonly preserveUnmatchedPath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern"></a>

```typescript
public readonly sourcePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointDeliveryRuleUrlRewriteAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---


### CdnEndpointGeoFilterList <a name="CdnEndpointGeoFilterList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGeoFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get"></a>

```typescript
public get(index: number): CdnEndpointGeoFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointGeoFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>[]

---


### CdnEndpointGeoFilterOutputReference <a name="CdnEndpointGeoFilterOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGeoFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodesInput">countryCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePathInput">relativePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodes">countryCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePath">relativePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `countryCodesInput`<sup>Optional</sup> <a name="countryCodesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodesInput"></a>

```typescript
public readonly countryCodesInput: string[];
```

- *Type:* string[]

---

##### `relativePathInput`<sup>Optional</sup> <a name="relativePathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePathInput"></a>

```typescript
public readonly relativePathInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `countryCodes`<sup>Required</sup> <a name="countryCodes" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodes"></a>

```typescript
public readonly countryCodes: string[];
```

- *Type:* string[]

---

##### `relativePath`<sup>Required</sup> <a name="relativePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePath"></a>

```typescript
public readonly relativePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointGeoFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>

---


### CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointGlobalDeliveryRuleCacheExpirationAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---


### CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---


### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get"></a>

```typescript
public get(index: number): CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>[]

---


### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>

---


### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get"></a>

```typescript
public get(index: number): CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>[]

---


### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>

---


### CdnEndpointGlobalDeliveryRuleOutputReference <a name="CdnEndpointGlobalDeliveryRuleOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction">putCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction">putCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction">putModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction">putModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction">putUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction">putUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheExpirationAction">resetCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheKeyQueryStringAction">resetCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyRequestHeaderAction">resetModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyResponseHeaderAction">resetModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRedirectAction">resetUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRewriteAction">resetUrlRewriteAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheExpirationAction` <a name="putCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction"></a>

```typescript
public putCacheExpirationAction(value: CdnEndpointGlobalDeliveryRuleCacheExpirationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---

##### `putCacheKeyQueryStringAction` <a name="putCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction"></a>

```typescript
public putCacheKeyQueryStringAction(value: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `putModifyRequestHeaderAction` <a name="putModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction"></a>

```typescript
public putModifyRequestHeaderAction(value: IResolvable | CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>[]

---

##### `putModifyResponseHeaderAction` <a name="putModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction"></a>

```typescript
public putModifyResponseHeaderAction(value: IResolvable | CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>[]

---

##### `putUrlRedirectAction` <a name="putUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction"></a>

```typescript
public putUrlRedirectAction(value: CdnEndpointGlobalDeliveryRuleUrlRedirectAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---

##### `putUrlRewriteAction` <a name="putUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction"></a>

```typescript
public putUrlRewriteAction(value: CdnEndpointGlobalDeliveryRuleUrlRewriteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---

##### `resetCacheExpirationAction` <a name="resetCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheExpirationAction"></a>

```typescript
public resetCacheExpirationAction(): void
```

##### `resetCacheKeyQueryStringAction` <a name="resetCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheKeyQueryStringAction"></a>

```typescript
public resetCacheKeyQueryStringAction(): void
```

##### `resetModifyRequestHeaderAction` <a name="resetModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyRequestHeaderAction"></a>

```typescript
public resetModifyRequestHeaderAction(): void
```

##### `resetModifyResponseHeaderAction` <a name="resetModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyResponseHeaderAction"></a>

```typescript
public resetModifyResponseHeaderAction(): void
```

##### `resetUrlRedirectAction` <a name="resetUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRedirectAction"></a>

```typescript
public resetUrlRedirectAction(): void
```

##### `resetUrlRewriteAction` <a name="resetUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRewriteAction"></a>

```typescript
public resetUrlRewriteAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationAction">cacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringAction">cacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderAction">modifyRequestHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderAction">modifyResponseHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationActionInput">cacheExpirationActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput">cacheKeyQueryStringActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput">modifyRequestHeaderActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput">modifyResponseHeaderActionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectActionInput">urlRedirectActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteActionInput">urlRewriteActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheExpirationAction`<sup>Required</sup> <a name="cacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationAction"></a>

```typescript
public readonly cacheExpirationAction: CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference</a>

---

##### `cacheKeyQueryStringAction`<sup>Required</sup> <a name="cacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringAction"></a>

```typescript
public readonly cacheKeyQueryStringAction: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference</a>

---

##### `modifyRequestHeaderAction`<sup>Required</sup> <a name="modifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderAction"></a>

```typescript
public readonly modifyRequestHeaderAction: CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList</a>

---

##### `modifyResponseHeaderAction`<sup>Required</sup> <a name="modifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderAction"></a>

```typescript
public readonly modifyResponseHeaderAction: CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList</a>

---

##### `urlRedirectAction`<sup>Required</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectAction"></a>

```typescript
public readonly urlRedirectAction: CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference</a>

---

##### `urlRewriteAction`<sup>Required</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteAction"></a>

```typescript
public readonly urlRewriteAction: CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference</a>

---

##### `cacheExpirationActionInput`<sup>Optional</sup> <a name="cacheExpirationActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationActionInput"></a>

```typescript
public readonly cacheExpirationActionInput: CdnEndpointGlobalDeliveryRuleCacheExpirationAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---

##### `cacheKeyQueryStringActionInput`<sup>Optional</sup> <a name="cacheKeyQueryStringActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput"></a>

```typescript
public readonly cacheKeyQueryStringActionInput: CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `modifyRequestHeaderActionInput`<sup>Optional</sup> <a name="modifyRequestHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput"></a>

```typescript
public readonly modifyRequestHeaderActionInput: IResolvable | CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>[]

---

##### `modifyResponseHeaderActionInput`<sup>Optional</sup> <a name="modifyResponseHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput"></a>

```typescript
public readonly modifyResponseHeaderActionInput: IResolvable | CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>[]

---

##### `urlRedirectActionInput`<sup>Optional</sup> <a name="urlRedirectActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectActionInput"></a>

```typescript
public readonly urlRedirectActionInput: CdnEndpointGlobalDeliveryRuleUrlRedirectAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---

##### `urlRewriteActionInput`<sup>Optional</sup> <a name="urlRewriteActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteActionInput"></a>

```typescript
public readonly urlRewriteActionInput: CdnEndpointGlobalDeliveryRuleUrlRewriteAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointGlobalDeliveryRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---


### CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetFragment">resetFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFragment` <a name="resetFragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetFragment"></a>

```typescript
public resetFragment(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput">fragmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput">redirectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragment">fragment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectType">redirectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fragmentInput`<sup>Optional</sup> <a name="fragmentInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput"></a>

```typescript
public readonly fragmentInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `redirectTypeInput`<sup>Optional</sup> <a name="redirectTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput"></a>

```typescript
public readonly redirectTypeInput: string;
```

- *Type:* string

---

##### `fragment`<sup>Required</sup> <a name="fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragment"></a>

```typescript
public readonly fragment: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectType"></a>

```typescript
public readonly redirectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointGlobalDeliveryRuleUrlRedirectAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---


### CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath">resetPreserveUnmatchedPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveUnmatchedPath` <a name="resetPreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath"></a>

```typescript
public resetPreserveUnmatchedPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput">preserveUnmatchedPathInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput">sourcePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern">sourcePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `preserveUnmatchedPathInput`<sup>Optional</sup> <a name="preserveUnmatchedPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput"></a>

```typescript
public readonly preserveUnmatchedPathInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcePatternInput`<sup>Optional</sup> <a name="sourcePatternInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput"></a>

```typescript
public readonly sourcePatternInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `preserveUnmatchedPath`<sup>Required</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath"></a>

```typescript
public readonly preserveUnmatchedPath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern"></a>

```typescript
public readonly sourcePattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointGlobalDeliveryRuleUrlRewriteAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---


### CdnEndpointOriginList <a name="CdnEndpointOriginList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointOriginList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get"></a>

```typescript
public get(index: number): CdnEndpointOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointOrigin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>[]

---


### CdnEndpointOriginOutputReference <a name="CdnEndpointOriginOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpPort">resetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpsPort">resetHttpsPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpPort` <a name="resetHttpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpPort"></a>

```typescript
public resetHttpPort(): void
```

##### `resetHttpsPort` <a name="resetHttpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpsPort"></a>

```typescript
public resetHttpsPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPortInput">httpPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPortInput">httpsPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPort">httpPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPort">httpsPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPortInput"></a>

```typescript
public readonly httpPortInput: number;
```

- *Type:* number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPortInput"></a>

```typescript
public readonly httpsPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointOrigin;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>

---


### CdnEndpointTimeoutsOutputReference <a name="CdnEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnEndpoint } from '@cdktf/provider-azurerm'

new cdnEndpoint.CdnEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

---



