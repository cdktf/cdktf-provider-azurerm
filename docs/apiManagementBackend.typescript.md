# `apiManagementBackend` Submodule <a name="`apiManagementBackend` Submodule" id="@cdktf/provider-azurerm.apiManagementBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementBackend <a name="ApiManagementBackend" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend azurerm_api_management_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackend(scope: Construct, id: string, config: ApiManagementBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig">ApiManagementBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig">ApiManagementBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCircuitBreakerRule">putCircuitBreakerRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy">putProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster">putServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetCircuitBreakerRule">resetCircuitBreakerRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetServiceFabricCluster">resetServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTls">resetTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCircuitBreakerRule` <a name="putCircuitBreakerRule" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCircuitBreakerRule"></a>

```typescript
public putCircuitBreakerRule(value: ApiManagementBackendCircuitBreakerRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCircuitBreakerRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule">ApiManagementBackendCircuitBreakerRule</a>

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials"></a>

```typescript
public putCredentials(value: ApiManagementBackendCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---

##### `putProxy` <a name="putProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy"></a>

```typescript
public putProxy(value: ApiManagementBackendProxy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---

##### `putServiceFabricCluster` <a name="putServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster"></a>

```typescript
public putServiceFabricCluster(value: ApiManagementBackendServiceFabricCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementBackendTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

---

##### `putTls` <a name="putTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls"></a>

```typescript
public putTls(value: ApiManagementBackendTls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---

##### `resetCircuitBreakerRule` <a name="resetCircuitBreakerRule" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetCircuitBreakerRule"></a>

```typescript
public resetCircuitBreakerRule(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetProxy"></a>

```typescript
public resetProxy(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetServiceFabricCluster` <a name="resetServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetServiceFabricCluster"></a>

```typescript
public resetServiceFabricCluster(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTls"></a>

```typescript
public resetTls(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

apiManagementBackend.ApiManagementBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

apiManagementBackend.ApiManagementBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

apiManagementBackend.ApiManagementBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

apiManagementBackend.ApiManagementBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.circuitBreakerRule">circuitBreakerRule</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference">ApiManagementBackendCircuitBreakerRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference">ApiManagementBackendCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference">ApiManagementBackendProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricCluster">serviceFabricCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference">ApiManagementBackendServiceFabricClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference">ApiManagementBackendTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference">ApiManagementBackendTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.circuitBreakerRuleInput">circuitBreakerRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule">ApiManagementBackendCircuitBreakerRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentialsInput">credentialsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxyInput">proxyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricClusterInput">serviceFabricClusterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tlsInput">tlsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `circuitBreakerRule`<sup>Required</sup> <a name="circuitBreakerRule" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.circuitBreakerRule"></a>

```typescript
public readonly circuitBreakerRule: ApiManagementBackendCircuitBreakerRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference">ApiManagementBackendCircuitBreakerRuleOutputReference</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentials"></a>

```typescript
public readonly credentials: ApiManagementBackendCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference">ApiManagementBackendCredentialsOutputReference</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxy"></a>

```typescript
public readonly proxy: ApiManagementBackendProxyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference">ApiManagementBackendProxyOutputReference</a>

---

##### `serviceFabricCluster`<sup>Required</sup> <a name="serviceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricCluster"></a>

```typescript
public readonly serviceFabricCluster: ApiManagementBackendServiceFabricClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference">ApiManagementBackendServiceFabricClusterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementBackendTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference">ApiManagementBackendTimeoutsOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tls"></a>

```typescript
public readonly tls: ApiManagementBackendTlsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference">ApiManagementBackendTlsOutputReference</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementNameInput"></a>

```typescript
public readonly apiManagementNameInput: string;
```

- *Type:* string

---

##### `circuitBreakerRuleInput`<sup>Optional</sup> <a name="circuitBreakerRuleInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.circuitBreakerRuleInput"></a>

```typescript
public readonly circuitBreakerRuleInput: ApiManagementBackendCircuitBreakerRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule">ApiManagementBackendCircuitBreakerRule</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: ApiManagementBackendCredentials;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxyInput"></a>

```typescript
public readonly proxyInput: ApiManagementBackendProxy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `serviceFabricClusterInput`<sup>Optional</sup> <a name="serviceFabricClusterInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricClusterInput"></a>

```typescript
public readonly serviceFabricClusterInput: ApiManagementBackendServiceFabricCluster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementBackendTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tlsInput"></a>

```typescript
public readonly tlsInput: ApiManagementBackendTls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementBackendCircuitBreakerRule <a name="ApiManagementBackendCircuitBreakerRule" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendCircuitBreakerRule: apiManagementBackend.ApiManagementBackendCircuitBreakerRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.property.failureCondition">failureCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition">ApiManagementBackendCircuitBreakerRuleFailureCondition</a></code> | failure_condition block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#name ApiManagementBackend#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.property.tripDuration">tripDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#trip_duration ApiManagementBackend#trip_duration}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.property.acceptRetryAfterEnabled">acceptRetryAfterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#accept_retry_after_enabled ApiManagementBackend#accept_retry_after_enabled}. |

---

##### `failureCondition`<sup>Required</sup> <a name="failureCondition" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.property.failureCondition"></a>

```typescript
public readonly failureCondition: ApiManagementBackendCircuitBreakerRuleFailureCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition">ApiManagementBackendCircuitBreakerRuleFailureCondition</a>

failure_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#failure_condition ApiManagementBackend#failure_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#name ApiManagementBackend#name}.

---

##### `tripDuration`<sup>Required</sup> <a name="tripDuration" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.property.tripDuration"></a>

```typescript
public readonly tripDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#trip_duration ApiManagementBackend#trip_duration}.

---

##### `acceptRetryAfterEnabled`<sup>Optional</sup> <a name="acceptRetryAfterEnabled" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule.property.acceptRetryAfterEnabled"></a>

```typescript
public readonly acceptRetryAfterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#accept_retry_after_enabled ApiManagementBackend#accept_retry_after_enabled}.

---

### ApiManagementBackendCircuitBreakerRuleFailureCondition <a name="ApiManagementBackendCircuitBreakerRuleFailureCondition" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendCircuitBreakerRuleFailureCondition: apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.intervalDuration">intervalDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#interval_duration ApiManagementBackend#interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#count ApiManagementBackend#count}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.errorReasons">errorReasons</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#error_reasons ApiManagementBackend#error_reasons}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.percentage">percentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#percentage ApiManagementBackend#percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.statusCodeRange">statusCodeRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a>[]</code> | status_code_range block. |

---

##### `intervalDuration`<sup>Required</sup> <a name="intervalDuration" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.intervalDuration"></a>

```typescript
public readonly intervalDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#interval_duration ApiManagementBackend#interval_duration}.

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#count ApiManagementBackend#count}.

---

##### `errorReasons`<sup>Optional</sup> <a name="errorReasons" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.errorReasons"></a>

```typescript
public readonly errorReasons: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#error_reasons ApiManagementBackend#error_reasons}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#percentage ApiManagementBackend#percentage}.

---

##### `statusCodeRange`<sup>Optional</sup> <a name="statusCodeRange" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition.property.statusCodeRange"></a>

```typescript
public readonly statusCodeRange: IResolvable | ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a>[]

status_code_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#status_code_range ApiManagementBackend#status_code_range}

---

### ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange <a name="ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange: apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#max ApiManagementBackend#max}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#min ApiManagementBackend#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#max ApiManagementBackend#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#min ApiManagementBackend#min}.

---

### ApiManagementBackendConfig <a name="ApiManagementBackendConfig" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendConfig: apiManagementBackend.ApiManagementBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#name ApiManagementBackend#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#url ApiManagementBackend#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.circuitBreakerRule">circuitBreakerRule</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule">ApiManagementBackendCircuitBreakerRule</a></code> | circuit_breaker_rule block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#description ApiManagementBackend#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#id ApiManagementBackend#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.serviceFabricCluster">serviceFabricCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | service_fabric_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#title ApiManagementBackend#title}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | tls block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#name ApiManagementBackend#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#url ApiManagementBackend#url}.

---

##### `circuitBreakerRule`<sup>Optional</sup> <a name="circuitBreakerRule" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.circuitBreakerRule"></a>

```typescript
public readonly circuitBreakerRule: ApiManagementBackendCircuitBreakerRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule">ApiManagementBackendCircuitBreakerRule</a>

circuit_breaker_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#circuit_breaker_rule ApiManagementBackend#circuit_breaker_rule}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.credentials"></a>

```typescript
public readonly credentials: ApiManagementBackendCredentials;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#credentials ApiManagementBackend#credentials}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#description ApiManagementBackend#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#id ApiManagementBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.proxy"></a>

```typescript
public readonly proxy: ApiManagementBackendProxy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#proxy ApiManagementBackend#proxy}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}.

---

##### `serviceFabricCluster`<sup>Optional</sup> <a name="serviceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.serviceFabricCluster"></a>

```typescript
public readonly serviceFabricCluster: ApiManagementBackendServiceFabricCluster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

service_fabric_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#service_fabric_cluster ApiManagementBackend#service_fabric_cluster}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementBackendTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#timeouts ApiManagementBackend#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#title ApiManagementBackend#title}.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.tls"></a>

```typescript
public readonly tls: ApiManagementBackendTls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#tls ApiManagementBackend#tls}

---

### ApiManagementBackendCredentials <a name="ApiManagementBackendCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendCredentials: apiManagementBackend.ApiManagementBackendCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.certificate">certificate</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#certificate ApiManagementBackend#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.header">header</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#header ApiManagementBackend#header}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.query">query</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#query ApiManagementBackend#query}. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.authorization"></a>

```typescript
public readonly authorization: ApiManagementBackendCredentialsAuthorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#authorization ApiManagementBackend#authorization}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.certificate"></a>

```typescript
public readonly certificate: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#certificate ApiManagementBackend#certificate}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.header"></a>

```typescript
public readonly header: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#header ApiManagementBackend#header}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.query"></a>

```typescript
public readonly query: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#query ApiManagementBackend#query}.

---

### ApiManagementBackendCredentialsAuthorization <a name="ApiManagementBackendCredentialsAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendCredentialsAuthorization: apiManagementBackend.ApiManagementBackendCredentialsAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.parameter">parameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#parameter ApiManagementBackend#parameter}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#scheme ApiManagementBackend#scheme}. |

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#parameter ApiManagementBackend#parameter}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#scheme ApiManagementBackend#scheme}.

---

### ApiManagementBackendProxy <a name="ApiManagementBackendProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendProxy: apiManagementBackend.ApiManagementBackendProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#url ApiManagementBackend#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#username ApiManagementBackend#username}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#password ApiManagementBackend#password}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#url ApiManagementBackend#url}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#username ApiManagementBackend#username}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#password ApiManagementBackend#password}.

---

### ApiManagementBackendServiceFabricCluster <a name="ApiManagementBackendServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendServiceFabricCluster: apiManagementBackend.ApiManagementBackendServiceFabricCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.managementEndpoints">managementEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#management_endpoints ApiManagementBackend#management_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.maxPartitionResolutionRetries">maxPartitionResolutionRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#max_partition_resolution_retries ApiManagementBackend#max_partition_resolution_retries}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#client_certificate_id ApiManagementBackend#client_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#client_certificate_thumbprint ApiManagementBackend#client_certificate_thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverCertificateThumbprints">serverCertificateThumbprints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#server_certificate_thumbprints ApiManagementBackend#server_certificate_thumbprints}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverX509Name">serverX509Name</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>[]</code> | server_x509_name block. |

---

##### `managementEndpoints`<sup>Required</sup> <a name="managementEndpoints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.managementEndpoints"></a>

```typescript
public readonly managementEndpoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#management_endpoints ApiManagementBackend#management_endpoints}.

---

##### `maxPartitionResolutionRetries`<sup>Required</sup> <a name="maxPartitionResolutionRetries" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.maxPartitionResolutionRetries"></a>

```typescript
public readonly maxPartitionResolutionRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#max_partition_resolution_retries ApiManagementBackend#max_partition_resolution_retries}.

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#client_certificate_id ApiManagementBackend#client_certificate_id}.

---

##### `clientCertificateThumbprint`<sup>Optional</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateThumbprint"></a>

```typescript
public readonly clientCertificateThumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#client_certificate_thumbprint ApiManagementBackend#client_certificate_thumbprint}.

---

##### `serverCertificateThumbprints`<sup>Optional</sup> <a name="serverCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverCertificateThumbprints"></a>

```typescript
public readonly serverCertificateThumbprints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#server_certificate_thumbprints ApiManagementBackend#server_certificate_thumbprints}.

---

##### `serverX509Name`<sup>Optional</sup> <a name="serverX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverX509Name"></a>

```typescript
public readonly serverX509Name: IResolvable | ApiManagementBackendServiceFabricClusterServerX509Name[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>[]

server_x509_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#server_x509_name ApiManagementBackend#server_x509_name}

---

### ApiManagementBackendServiceFabricClusterServerX509Name <a name="ApiManagementBackendServiceFabricClusterServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendServiceFabricClusterServerX509Name: apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.issuerCertificateThumbprint">issuerCertificateThumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#issuer_certificate_thumbprint ApiManagementBackend#issuer_certificate_thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#name ApiManagementBackend#name}. |

---

##### `issuerCertificateThumbprint`<sup>Required</sup> <a name="issuerCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.issuerCertificateThumbprint"></a>

```typescript
public readonly issuerCertificateThumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#issuer_certificate_thumbprint ApiManagementBackend#issuer_certificate_thumbprint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#name ApiManagementBackend#name}.

---

### ApiManagementBackendTimeouts <a name="ApiManagementBackendTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendTimeouts: apiManagementBackend.ApiManagementBackendTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#create ApiManagementBackend#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#delete ApiManagementBackend#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#read ApiManagementBackend#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#update ApiManagementBackend#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#create ApiManagementBackend#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#delete ApiManagementBackend#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#read ApiManagementBackend#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#update ApiManagementBackend#update}.

---

### ApiManagementBackendTls <a name="ApiManagementBackendTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

const apiManagementBackendTls: apiManagementBackend.ApiManagementBackendTls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateChain">validateCertificateChain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#validate_certificate_chain ApiManagementBackend#validate_certificate_chain}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateName">validateCertificateName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#validate_certificate_name ApiManagementBackend#validate_certificate_name}. |

---

##### `validateCertificateChain`<sup>Optional</sup> <a name="validateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateChain"></a>

```typescript
public readonly validateCertificateChain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#validate_certificate_chain ApiManagementBackend#validate_certificate_chain}.

---

##### `validateCertificateName`<sup>Optional</sup> <a name="validateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateName"></a>

```typescript
public readonly validateCertificateName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.54.0/docs/resources/api_management_backend#validate_certificate_name ApiManagementBackend#validate_certificate_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference <a name="ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.putStatusCodeRange">putStatusCodeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resetErrorReasons">resetErrorReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resetStatusCodeRange">resetStatusCodeRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatusCodeRange` <a name="putStatusCodeRange" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.putStatusCodeRange"></a>

```typescript
public putStatusCodeRange(value: IResolvable | ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.putStatusCodeRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a>[]

---

##### `resetCount` <a name="resetCount" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetErrorReasons` <a name="resetErrorReasons" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resetErrorReasons"></a>

```typescript
public resetErrorReasons(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```

##### `resetStatusCodeRange` <a name="resetStatusCodeRange" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.resetStatusCodeRange"></a>

```typescript
public resetStatusCodeRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.statusCodeRange">statusCodeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.errorReasonsInput">errorReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.intervalDurationInput">intervalDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.statusCodeRangeInput">statusCodeRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.errorReasons">errorReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.intervalDuration">intervalDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition">ApiManagementBackendCircuitBreakerRuleFailureCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCodeRange`<sup>Required</sup> <a name="statusCodeRange" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.statusCodeRange"></a>

```typescript
public readonly statusCodeRange: ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `errorReasonsInput`<sup>Optional</sup> <a name="errorReasonsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.errorReasonsInput"></a>

```typescript
public readonly errorReasonsInput: string[];
```

- *Type:* string[]

---

##### `intervalDurationInput`<sup>Optional</sup> <a name="intervalDurationInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.intervalDurationInput"></a>

```typescript
public readonly intervalDurationInput: string;
```

- *Type:* string

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `statusCodeRangeInput`<sup>Optional</sup> <a name="statusCodeRangeInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.statusCodeRangeInput"></a>

```typescript
public readonly statusCodeRangeInput: IResolvable | ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a>[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `errorReasons`<sup>Required</sup> <a name="errorReasons" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.errorReasons"></a>

```typescript
public readonly errorReasons: string[];
```

- *Type:* string[]

---

##### `intervalDuration`<sup>Required</sup> <a name="intervalDuration" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.intervalDuration"></a>

```typescript
public readonly intervalDuration: string;
```

- *Type:* string

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementBackendCircuitBreakerRuleFailureCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition">ApiManagementBackendCircuitBreakerRuleFailureCondition</a>

---


### ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList <a name="ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.get"></a>

```typescript
public get(index: number): ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a>[]

---


### ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference <a name="ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange">ApiManagementBackendCircuitBreakerRuleFailureConditionStatusCodeRange</a>

---


### ApiManagementBackendCircuitBreakerRuleOutputReference <a name="ApiManagementBackendCircuitBreakerRuleOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.putFailureCondition">putFailureCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.resetAcceptRetryAfterEnabled">resetAcceptRetryAfterEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFailureCondition` <a name="putFailureCondition" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.putFailureCondition"></a>

```typescript
public putFailureCondition(value: ApiManagementBackendCircuitBreakerRuleFailureCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.putFailureCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition">ApiManagementBackendCircuitBreakerRuleFailureCondition</a>

---

##### `resetAcceptRetryAfterEnabled` <a name="resetAcceptRetryAfterEnabled" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.resetAcceptRetryAfterEnabled"></a>

```typescript
public resetAcceptRetryAfterEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.failureCondition">failureCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference">ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.acceptRetryAfterEnabledInput">acceptRetryAfterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.failureConditionInput">failureConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition">ApiManagementBackendCircuitBreakerRuleFailureCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.tripDurationInput">tripDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.acceptRetryAfterEnabled">acceptRetryAfterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.tripDuration">tripDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule">ApiManagementBackendCircuitBreakerRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureCondition`<sup>Required</sup> <a name="failureCondition" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.failureCondition"></a>

```typescript
public readonly failureCondition: ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference">ApiManagementBackendCircuitBreakerRuleFailureConditionOutputReference</a>

---

##### `acceptRetryAfterEnabledInput`<sup>Optional</sup> <a name="acceptRetryAfterEnabledInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.acceptRetryAfterEnabledInput"></a>

```typescript
public readonly acceptRetryAfterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failureConditionInput`<sup>Optional</sup> <a name="failureConditionInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.failureConditionInput"></a>

```typescript
public readonly failureConditionInput: ApiManagementBackendCircuitBreakerRuleFailureCondition;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleFailureCondition">ApiManagementBackendCircuitBreakerRuleFailureCondition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tripDurationInput`<sup>Optional</sup> <a name="tripDurationInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.tripDurationInput"></a>

```typescript
public readonly tripDurationInput: string;
```

- *Type:* string

---

##### `acceptRetryAfterEnabled`<sup>Required</sup> <a name="acceptRetryAfterEnabled" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.acceptRetryAfterEnabled"></a>

```typescript
public readonly acceptRetryAfterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tripDuration`<sup>Required</sup> <a name="tripDuration" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.tripDuration"></a>

```typescript
public readonly tripDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementBackendCircuitBreakerRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCircuitBreakerRule">ApiManagementBackendCircuitBreakerRule</a>

---


### ApiManagementBackendCredentialsAuthorizationOutputReference <a name="ApiManagementBackendCredentialsAuthorizationOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameterInput">parameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementBackendCredentialsAuthorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---


### ApiManagementBackendCredentialsOutputReference <a name="ApiManagementBackendCredentialsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization"></a>

```typescript
public putAuthorization(value: ApiManagementBackendCredentialsAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference">ApiManagementBackendCredentialsAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificateInput">certificateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.headerInput">headerInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.queryInput">queryInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificate">certificate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.header">header</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.query">query</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: ApiManagementBackendCredentialsAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference">ApiManagementBackendCredentialsAuthorizationOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: ApiManagementBackendCredentialsAuthorization;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string[];
```

- *Type:* string[]

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string[];
```

- *Type:* string[]

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.header"></a>

```typescript
public readonly header: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.query"></a>

```typescript
public readonly query: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementBackendCredentials;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---


### ApiManagementBackendProxyOutputReference <a name="ApiManagementBackendProxyOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resetPassword">resetPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementBackendProxy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---


### ApiManagementBackendServiceFabricClusterOutputReference <a name="ApiManagementBackendServiceFabricClusterOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name">putServerX509Name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateThumbprint">resetClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerCertificateThumbprints">resetServerCertificateThumbprints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerX509Name">resetServerX509Name</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerX509Name` <a name="putServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name"></a>

```typescript
public putServerX509Name(value: IResolvable | ApiManagementBackendServiceFabricClusterServerX509Name[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>[]

---

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateId"></a>

```typescript
public resetClientCertificateId(): void
```

##### `resetClientCertificateThumbprint` <a name="resetClientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateThumbprint"></a>

```typescript
public resetClientCertificateThumbprint(): void
```

##### `resetServerCertificateThumbprints` <a name="resetServerCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerCertificateThumbprints"></a>

```typescript
public resetServerCertificateThumbprints(): void
```

##### `resetServerX509Name` <a name="resetServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerX509Name"></a>

```typescript
public resetServerX509Name(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509Name">serverX509Name</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList">ApiManagementBackendServiceFabricClusterServerX509NameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprintInput">clientCertificateThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpointsInput">managementEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetriesInput">maxPartitionResolutionRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprintsInput">serverCertificateThumbprintsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509NameInput">serverX509NameInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpoints">managementEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetries">maxPartitionResolutionRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprints">serverCertificateThumbprints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverX509Name`<sup>Required</sup> <a name="serverX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509Name"></a>

```typescript
public readonly serverX509Name: ApiManagementBackendServiceFabricClusterServerX509NameList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList">ApiManagementBackendServiceFabricClusterServerX509NameList</a>

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateIdInput"></a>

```typescript
public readonly clientCertificateIdInput: string;
```

- *Type:* string

---

##### `clientCertificateThumbprintInput`<sup>Optional</sup> <a name="clientCertificateThumbprintInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprintInput"></a>

```typescript
public readonly clientCertificateThumbprintInput: string;
```

- *Type:* string

---

##### `managementEndpointsInput`<sup>Optional</sup> <a name="managementEndpointsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpointsInput"></a>

```typescript
public readonly managementEndpointsInput: string[];
```

- *Type:* string[]

---

##### `maxPartitionResolutionRetriesInput`<sup>Optional</sup> <a name="maxPartitionResolutionRetriesInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetriesInput"></a>

```typescript
public readonly maxPartitionResolutionRetriesInput: number;
```

- *Type:* number

---

##### `serverCertificateThumbprintsInput`<sup>Optional</sup> <a name="serverCertificateThumbprintsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprintsInput"></a>

```typescript
public readonly serverCertificateThumbprintsInput: string[];
```

- *Type:* string[]

---

##### `serverX509NameInput`<sup>Optional</sup> <a name="serverX509NameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509NameInput"></a>

```typescript
public readonly serverX509NameInput: IResolvable | ApiManagementBackendServiceFabricClusterServerX509Name[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>[]

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

---

##### `clientCertificateThumbprint`<sup>Required</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprint"></a>

```typescript
public readonly clientCertificateThumbprint: string;
```

- *Type:* string

---

##### `managementEndpoints`<sup>Required</sup> <a name="managementEndpoints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpoints"></a>

```typescript
public readonly managementEndpoints: string[];
```

- *Type:* string[]

---

##### `maxPartitionResolutionRetries`<sup>Required</sup> <a name="maxPartitionResolutionRetries" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetries"></a>

```typescript
public readonly maxPartitionResolutionRetries: number;
```

- *Type:* number

---

##### `serverCertificateThumbprints`<sup>Required</sup> <a name="serverCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprints"></a>

```typescript
public readonly serverCertificateThumbprints: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementBackendServiceFabricCluster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---


### ApiManagementBackendServiceFabricClusterServerX509NameList <a name="ApiManagementBackendServiceFabricClusterServerX509NameList" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get"></a>

```typescript
public get(index: number): ApiManagementBackendServiceFabricClusterServerX509NameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementBackendServiceFabricClusterServerX509Name[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>[]

---


### ApiManagementBackendServiceFabricClusterServerX509NameOutputReference <a name="ApiManagementBackendServiceFabricClusterServerX509NameOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprintInput">issuerCertificateThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprint">issuerCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuerCertificateThumbprintInput`<sup>Optional</sup> <a name="issuerCertificateThumbprintInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprintInput"></a>

```typescript
public readonly issuerCertificateThumbprintInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `issuerCertificateThumbprint`<sup>Required</sup> <a name="issuerCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprint"></a>

```typescript
public readonly issuerCertificateThumbprint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementBackendServiceFabricClusterServerX509Name;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>

---


### ApiManagementBackendTimeoutsOutputReference <a name="ApiManagementBackendTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementBackendTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

---


### ApiManagementBackendTlsOutputReference <a name="ApiManagementBackendTlsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer"></a>

```typescript
import { apiManagementBackend } from '@cdktf/provider-azurerm'

new apiManagementBackend.ApiManagementBackendTlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateChain">resetValidateCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateName">resetValidateCertificateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidateCertificateChain` <a name="resetValidateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateChain"></a>

```typescript
public resetValidateCertificateChain(): void
```

##### `resetValidateCertificateName` <a name="resetValidateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateName"></a>

```typescript
public resetValidateCertificateName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChainInput">validateCertificateChainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateNameInput">validateCertificateNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChain">validateCertificateChain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateName">validateCertificateName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validateCertificateChainInput`<sup>Optional</sup> <a name="validateCertificateChainInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChainInput"></a>

```typescript
public readonly validateCertificateChainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validateCertificateNameInput`<sup>Optional</sup> <a name="validateCertificateNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateNameInput"></a>

```typescript
public readonly validateCertificateNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validateCertificateChain`<sup>Required</sup> <a name="validateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChain"></a>

```typescript
public readonly validateCertificateChain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validateCertificateName`<sup>Required</sup> <a name="validateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateName"></a>

```typescript
public readonly validateCertificateName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementBackendTls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---



