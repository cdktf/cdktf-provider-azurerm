# `arcKubernetesFluxConfiguration` Submodule <a name="`arcKubernetesFluxConfiguration` Submodule" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcKubernetesFluxConfiguration <a name="ArcKubernetesFluxConfiguration" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration azurerm_arc_kubernetes_flux_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration(scope: Construct, id: string, config: ArcKubernetesFluxConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig">ArcKubernetesFluxConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig">ArcKubernetesFluxConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage">putBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket">putBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations">putKustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBlobStorage">resetBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetContinuousReconciliationEnabled">resetContinuousReconciliationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlobStorage` <a name="putBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage"></a>

```typescript
public putBlobStorage(value: ArcKubernetesFluxConfigurationBlobStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---

##### `putBucket` <a name="putBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket"></a>

```typescript
public putBucket(value: ArcKubernetesFluxConfigurationBucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---

##### `putGitRepository` <a name="putGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository"></a>

```typescript
public putGitRepository(value: ArcKubernetesFluxConfigurationGitRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---

##### `putKustomizations` <a name="putKustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations"></a>

```typescript
public putKustomizations(value: IResolvable | ArcKubernetesFluxConfigurationKustomizations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putKustomizations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: ArcKubernetesFluxConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

---

##### `resetBlobStorage` <a name="resetBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBlobStorage"></a>

```typescript
public resetBlobStorage(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetContinuousReconciliationEnabled` <a name="resetContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetContinuousReconciliationEnabled"></a>

```typescript
public resetContinuousReconciliationEnabled(): void
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetGitRepository"></a>

```typescript
public resetGitRepository(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArcKubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ArcKubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArcKubernetesFluxConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArcKubernetesFluxConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArcKubernetesFluxConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference">ArcKubernetesFluxConfigurationBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference">ArcKubernetesFluxConfigurationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference">ArcKubernetesFluxConfigurationGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizations">kustomizations</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList">ArcKubernetesFluxConfigurationKustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference">ArcKubernetesFluxConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorageInput">blobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucketInput">bucketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabledInput">continuousReconciliationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizationsInput">kustomizationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blobStorage`<sup>Required</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorage"></a>

```typescript
public readonly blobStorage: ArcKubernetesFluxConfigurationBlobStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference">ArcKubernetesFluxConfigurationBlobStorageOutputReference</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucket"></a>

```typescript
public readonly bucket: ArcKubernetesFluxConfigurationBucketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference">ArcKubernetesFluxConfigurationBucketOutputReference</a>

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepository"></a>

```typescript
public readonly gitRepository: ArcKubernetesFluxConfigurationGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference">ArcKubernetesFluxConfigurationGitRepositoryOutputReference</a>

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizations"></a>

```typescript
public readonly kustomizations: ArcKubernetesFluxConfigurationKustomizationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList">ArcKubernetesFluxConfigurationKustomizationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: ArcKubernetesFluxConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference">ArcKubernetesFluxConfigurationTimeoutsOutputReference</a>

---

##### `blobStorageInput`<sup>Optional</sup> <a name="blobStorageInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.blobStorageInput"></a>

```typescript
public readonly blobStorageInput: ArcKubernetesFluxConfigurationBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.bucketInput"></a>

```typescript
public readonly bucketInput: ArcKubernetesFluxConfigurationBucket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `continuousReconciliationEnabledInput`<sup>Optional</sup> <a name="continuousReconciliationEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabledInput"></a>

```typescript
public readonly continuousReconciliationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.gitRepositoryInput"></a>

```typescript
public readonly gitRepositoryInput: ArcKubernetesFluxConfigurationGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kustomizationsInput`<sup>Optional</sup> <a name="kustomizationsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.kustomizationsInput"></a>

```typescript
public readonly kustomizationsInput: IResolvable | ArcKubernetesFluxConfigurationKustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArcKubernetesFluxConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `continuousReconciliationEnabled`<sup>Required</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.continuousReconciliationEnabled"></a>

```typescript
public readonly continuousReconciliationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcKubernetesFluxConfigurationBlobStorage <a name="ArcKubernetesFluxConfigurationBlobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const arcKubernetesFluxConfigurationBlobStorage: arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.containerId">containerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.sasToken">sasToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#container_id ArcKubernetesFluxConfiguration#container_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#account_key ArcKubernetesFluxConfiguration#account_key}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sas_token ArcKubernetesFluxConfiguration#sas_token}.

---

##### `servicePrincipal`<sup>Optional</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#service_principal ArcKubernetesFluxConfiguration#service_principal}

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationBlobStorageServicePrincipal <a name="ArcKubernetesFluxConfigurationBlobStorageServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const arcKubernetesFluxConfigurationBlobStorageServicePrincipal: arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64">clientCertificateBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain">clientCertificateSendChain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_id ArcKubernetesFluxConfiguration#client_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#tenant_id ArcKubernetesFluxConfiguration#tenant_id}.

---

##### `clientCertificateBase64`<sup>Optional</sup> <a name="clientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64"></a>

```typescript
public readonly clientCertificateBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_base64 ArcKubernetesFluxConfiguration#client_certificate_base64}.

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_password ArcKubernetesFluxConfiguration#client_certificate_password}.

---

##### `clientCertificateSendChain`<sup>Optional</sup> <a name="clientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain"></a>

```typescript
public readonly clientCertificateSendChain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_certificate_send_chain ArcKubernetesFluxConfiguration#client_certificate_send_chain}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#client_secret ArcKubernetesFluxConfiguration#client_secret}.

---

### ArcKubernetesFluxConfigurationBucket <a name="ArcKubernetesFluxConfigurationBucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const arcKubernetesFluxConfigurationBucket: arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.secretKeyBase64">secretKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#bucket_name ArcKubernetesFluxConfiguration#bucket_name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#access_key ArcKubernetesFluxConfiguration#access_key}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `secretKeyBase64`<sup>Optional</sup> <a name="secretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.secretKeyBase64"></a>

```typescript
public readonly secretKeyBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#secret_key_base64 ArcKubernetesFluxConfiguration#secret_key_base64}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#tls_enabled ArcKubernetesFluxConfiguration#tls_enabled}.

---

### ArcKubernetesFluxConfigurationConfig <a name="ArcKubernetesFluxConfigurationConfig" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const arcKubernetesFluxConfigurationConfig: arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.kustomizations">kustomizations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>[]</code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#cluster_id ArcKubernetesFluxConfiguration#cluster_id}.

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.kustomizations"></a>

```typescript
public readonly kustomizations: IResolvable | ArcKubernetesFluxConfigurationKustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>[]

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#kustomizations ArcKubernetesFluxConfiguration#kustomizations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#namespace ArcKubernetesFluxConfiguration#namespace}.

---

##### `blobStorage`<sup>Optional</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.blobStorage"></a>

```typescript
public readonly blobStorage: ArcKubernetesFluxConfigurationBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#blob_storage ArcKubernetesFluxConfiguration#blob_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.bucket"></a>

```typescript
public readonly bucket: ArcKubernetesFluxConfigurationBucket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#bucket ArcKubernetesFluxConfiguration#bucket}

---

##### `continuousReconciliationEnabled`<sup>Optional</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled"></a>

```typescript
public readonly continuousReconciliationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#continuous_reconciliation_enabled ArcKubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.gitRepository"></a>

```typescript
public readonly gitRepository: ArcKubernetesFluxConfigurationGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#git_repository ArcKubernetesFluxConfiguration#git_repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#id ArcKubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#scope ArcKubernetesFluxConfiguration#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArcKubernetesFluxConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeouts ArcKubernetesFluxConfiguration#timeouts}

---

### ArcKubernetesFluxConfigurationGitRepository <a name="ArcKubernetesFluxConfigurationGitRepository" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const arcKubernetesFluxConfigurationGitRepository: arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceType">referenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceValue">referenceValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64">httpsCaCertBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsKeyBase64">httpsKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsUser">httpsUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64">sshKnownHostsBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64">sshPrivateKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceType"></a>

```typescript
public readonly referenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#reference_type ArcKubernetesFluxConfiguration#reference_type}.

---

##### `referenceValue`<sup>Required</sup> <a name="referenceValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.referenceValue"></a>

```typescript
public readonly referenceValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#reference_value ArcKubernetesFluxConfiguration#reference_value}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#url ArcKubernetesFluxConfiguration#url}.

---

##### `httpsCaCertBase64`<sup>Optional</sup> <a name="httpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64"></a>

```typescript
public readonly httpsCaCertBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#https_ca_cert_base64 ArcKubernetesFluxConfiguration#https_ca_cert_base64}.

---

##### `httpsKeyBase64`<sup>Optional</sup> <a name="httpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsKeyBase64"></a>

```typescript
public readonly httpsKeyBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#https_key_base64 ArcKubernetesFluxConfiguration#https_key_base64}.

---

##### `httpsUser`<sup>Optional</sup> <a name="httpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.httpsUser"></a>

```typescript
public readonly httpsUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#https_user ArcKubernetesFluxConfiguration#https_user}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#local_auth_reference ArcKubernetesFluxConfiguration#local_auth_reference}.

---

##### `sshKnownHostsBase64`<sup>Optional</sup> <a name="sshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64"></a>

```typescript
public readonly sshKnownHostsBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#ssh_known_hosts_base64 ArcKubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

##### `sshPrivateKeyBase64`<sup>Optional</sup> <a name="sshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64"></a>

```typescript
public readonly sshPrivateKeyBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#ssh_private_key_base64 ArcKubernetesFluxConfiguration#ssh_private_key_base64}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationKustomizations <a name="ArcKubernetesFluxConfigurationKustomizations" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const arcKubernetesFluxConfigurationKustomizations: arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#depends_on ArcKubernetesFluxConfiguration#depends_on}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled">garbageCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#garbage_collection_enabled ArcKubernetesFluxConfiguration#garbage_collection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#path ArcKubernetesFluxConfiguration#path}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.recreatingEnabled">recreatingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#recreating_enabled ArcKubernetesFluxConfiguration#recreating_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds">retryIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#retry_interval_in_seconds ArcKubernetesFluxConfiguration#retry_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#name ArcKubernetesFluxConfiguration#name}.

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#depends_on ArcKubernetesFluxConfiguration#depends_on}.

---

##### `garbageCollectionEnabled`<sup>Optional</sup> <a name="garbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled"></a>

```typescript
public readonly garbageCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#garbage_collection_enabled ArcKubernetesFluxConfiguration#garbage_collection_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#path ArcKubernetesFluxConfiguration#path}.

---

##### `recreatingEnabled`<sup>Optional</sup> <a name="recreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.recreatingEnabled"></a>

```typescript
public readonly recreatingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#recreating_enabled ArcKubernetesFluxConfiguration#recreating_enabled}.

---

##### `retryIntervalInSeconds`<sup>Optional</sup> <a name="retryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds"></a>

```typescript
public readonly retryIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#retry_interval_in_seconds ArcKubernetesFluxConfiguration#retry_interval_in_seconds}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#sync_interval_in_seconds ArcKubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#timeout_in_seconds ArcKubernetesFluxConfiguration#timeout_in_seconds}.

---

### ArcKubernetesFluxConfigurationTimeouts <a name="ArcKubernetesFluxConfigurationTimeouts" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const arcKubernetesFluxConfigurationTimeouts: arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#create ArcKubernetesFluxConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#delete ArcKubernetesFluxConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#read ArcKubernetesFluxConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/arc_kubernetes_flux_configuration#update ArcKubernetesFluxConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcKubernetesFluxConfigurationBlobStorageOutputReference <a name="ArcKubernetesFluxConfigurationBlobStorageOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal">putServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken">resetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal">resetServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServicePrincipal` <a name="putServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal"></a>

```typescript
public putServicePrincipal(value: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey"></a>

```typescript
public resetAccountKey(): void
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference"></a>

```typescript
public resetLocalAuthReference(): void
```

##### `resetSasToken` <a name="resetSasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken"></a>

```typescript
public resetSasToken(): void
```

##### `resetServicePrincipal` <a name="resetServicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal"></a>

```typescript
public resetServicePrincipal(): void
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds"></a>

```typescript
public resetSyncIntervalInSeconds(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput">sasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken">sasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a>

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput"></a>

```typescript
public readonly containerIdInput: string;
```

- *Type:* string

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput"></a>

```typescript
public readonly localAuthReferenceInput: string;
```

- *Type:* string

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput"></a>

```typescript
public readonly sasTokenInput: string;
```

- *Type:* string

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput"></a>

```typescript
public readonly servicePrincipalInput: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput"></a>

```typescript
public readonly syncIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArcKubernetesFluxConfigurationBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorage">ArcKubernetesFluxConfigurationBlobStorage</a>

---


### ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference <a name="ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64">resetClientCertificateBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain">resetClientCertificateSendChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificateBase64` <a name="resetClientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64"></a>

```typescript
public resetClientCertificateBase64(): void
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword"></a>

```typescript
public resetClientCertificatePassword(): void
```

##### `resetClientCertificateSendChain` <a name="resetClientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain"></a>

```typescript
public resetClientCertificateSendChain(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input">clientCertificateBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput">clientCertificateSendChainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64">clientCertificateBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain">clientCertificateSendChain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificateBase64Input`<sup>Optional</sup> <a name="clientCertificateBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input"></a>

```typescript
public readonly clientCertificateBase64Input: string;
```

- *Type:* string

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput"></a>

```typescript
public readonly clientCertificatePasswordInput: string;
```

- *Type:* string

---

##### `clientCertificateSendChainInput`<sup>Optional</sup> <a name="clientCertificateSendChainInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput"></a>

```typescript
public readonly clientCertificateSendChainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientCertificateBase64`<sup>Required</sup> <a name="clientCertificateBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64"></a>

```typescript
public readonly clientCertificateBase64: string;
```

- *Type:* string

---

##### `clientCertificatePassword`<sup>Required</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

---

##### `clientCertificateSendChain`<sup>Required</sup> <a name="clientCertificateSendChain" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain"></a>

```typescript
public readonly clientCertificateSendChain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArcKubernetesFluxConfigurationBlobStorageServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBlobStorageServicePrincipal">ArcKubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---


### ArcKubernetesFluxConfigurationBucketOutputReference <a name="ArcKubernetesFluxConfigurationBucketOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64">resetSecretKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference"></a>

```typescript
public resetLocalAuthReference(): void
```

##### `resetSecretKeyBase64` <a name="resetSecretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64"></a>

```typescript
public resetSecretKeyBase64(): void
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds"></a>

```typescript
public resetSyncIntervalInSeconds(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled"></a>

```typescript
public resetTlsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input">secretKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64">secretKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput"></a>

```typescript
public readonly localAuthReferenceInput: string;
```

- *Type:* string

---

##### `secretKeyBase64Input`<sup>Optional</sup> <a name="secretKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input"></a>

```typescript
public readonly secretKeyBase64Input: string;
```

- *Type:* string

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput"></a>

```typescript
public readonly syncIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput"></a>

```typescript
public readonly tlsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

---

##### `secretKeyBase64`<sup>Required</sup> <a name="secretKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64"></a>

```typescript
public readonly secretKeyBase64: string;
```

- *Type:* string

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArcKubernetesFluxConfigurationBucket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationBucket">ArcKubernetesFluxConfigurationBucket</a>

---


### ArcKubernetesFluxConfigurationGitRepositoryOutputReference <a name="ArcKubernetesFluxConfigurationGitRepositoryOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64">resetHttpsCaCertBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64">resetHttpsKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser">resetHttpsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64">resetSshKnownHostsBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64">resetSshPrivateKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpsCaCertBase64` <a name="resetHttpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64"></a>

```typescript
public resetHttpsCaCertBase64(): void
```

##### `resetHttpsKeyBase64` <a name="resetHttpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64"></a>

```typescript
public resetHttpsKeyBase64(): void
```

##### `resetHttpsUser` <a name="resetHttpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser"></a>

```typescript
public resetHttpsUser(): void
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference"></a>

```typescript
public resetLocalAuthReference(): void
```

##### `resetSshKnownHostsBase64` <a name="resetSshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64"></a>

```typescript
public resetSshKnownHostsBase64(): void
```

##### `resetSshPrivateKeyBase64` <a name="resetSshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64"></a>

```typescript
public resetSshPrivateKeyBase64(): void
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds"></a>

```typescript
public resetSyncIntervalInSeconds(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input">httpsCaCertBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input">httpsKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput">httpsUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput">referenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput">referenceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input">sshKnownHostsBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input">sshPrivateKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64">httpsCaCertBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64">httpsKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser">httpsUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType">referenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue">referenceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64">sshKnownHostsBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64">sshPrivateKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpsCaCertBase64Input`<sup>Optional</sup> <a name="httpsCaCertBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input"></a>

```typescript
public readonly httpsCaCertBase64Input: string;
```

- *Type:* string

---

##### `httpsKeyBase64Input`<sup>Optional</sup> <a name="httpsKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input"></a>

```typescript
public readonly httpsKeyBase64Input: string;
```

- *Type:* string

---

##### `httpsUserInput`<sup>Optional</sup> <a name="httpsUserInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput"></a>

```typescript
public readonly httpsUserInput: string;
```

- *Type:* string

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput"></a>

```typescript
public readonly localAuthReferenceInput: string;
```

- *Type:* string

---

##### `referenceTypeInput`<sup>Optional</sup> <a name="referenceTypeInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput"></a>

```typescript
public readonly referenceTypeInput: string;
```

- *Type:* string

---

##### `referenceValueInput`<sup>Optional</sup> <a name="referenceValueInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput"></a>

```typescript
public readonly referenceValueInput: string;
```

- *Type:* string

---

##### `sshKnownHostsBase64Input`<sup>Optional</sup> <a name="sshKnownHostsBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input"></a>

```typescript
public readonly sshKnownHostsBase64Input: string;
```

- *Type:* string

---

##### `sshPrivateKeyBase64Input`<sup>Optional</sup> <a name="sshPrivateKeyBase64Input" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input"></a>

```typescript
public readonly sshPrivateKeyBase64Input: string;
```

- *Type:* string

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput"></a>

```typescript
public readonly syncIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `httpsCaCertBase64`<sup>Required</sup> <a name="httpsCaCertBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64"></a>

```typescript
public readonly httpsCaCertBase64: string;
```

- *Type:* string

---

##### `httpsKeyBase64`<sup>Required</sup> <a name="httpsKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64"></a>

```typescript
public readonly httpsKeyBase64: string;
```

- *Type:* string

---

##### `httpsUser`<sup>Required</sup> <a name="httpsUser" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser"></a>

```typescript
public readonly httpsUser: string;
```

- *Type:* string

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType"></a>

```typescript
public readonly referenceType: string;
```

- *Type:* string

---

##### `referenceValue`<sup>Required</sup> <a name="referenceValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue"></a>

```typescript
public readonly referenceValue: string;
```

- *Type:* string

---

##### `sshKnownHostsBase64`<sup>Required</sup> <a name="sshKnownHostsBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64"></a>

```typescript
public readonly sshKnownHostsBase64: string;
```

- *Type:* string

---

##### `sshPrivateKeyBase64`<sup>Required</sup> <a name="sshPrivateKeyBase64" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64"></a>

```typescript
public readonly sshPrivateKeyBase64: string;
```

- *Type:* string

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArcKubernetesFluxConfigurationGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationGitRepository">ArcKubernetesFluxConfigurationGitRepository</a>

---


### ArcKubernetesFluxConfigurationKustomizationsList <a name="ArcKubernetesFluxConfigurationKustomizationsList" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get"></a>

```typescript
public get(index: number): ArcKubernetesFluxConfigurationKustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArcKubernetesFluxConfigurationKustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>[]

---


### ArcKubernetesFluxConfigurationKustomizationsOutputReference <a name="ArcKubernetesFluxConfigurationKustomizationsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled">resetGarbageCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled">resetRecreatingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds">resetRetryIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn"></a>

```typescript
public resetDependsOn(): void
```

##### `resetGarbageCollectionEnabled` <a name="resetGarbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled"></a>

```typescript
public resetGarbageCollectionEnabled(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRecreatingEnabled` <a name="resetRecreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled"></a>

```typescript
public resetRecreatingEnabled(): void
```

##### `resetRetryIntervalInSeconds` <a name="resetRetryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds"></a>

```typescript
public resetRetryIntervalInSeconds(): void
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds"></a>

```typescript
public resetSyncIntervalInSeconds(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput">garbageCollectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput">recreatingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput">retryIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled">garbageCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled">recreatingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds">retryIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput"></a>

```typescript
public readonly dependsOnInput: string[];
```

- *Type:* string[]

---

##### `garbageCollectionEnabledInput`<sup>Optional</sup> <a name="garbageCollectionEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput"></a>

```typescript
public readonly garbageCollectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `recreatingEnabledInput`<sup>Optional</sup> <a name="recreatingEnabledInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput"></a>

```typescript
public readonly recreatingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryIntervalInSecondsInput`<sup>Optional</sup> <a name="retryIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput"></a>

```typescript
public readonly retryIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput"></a>

```typescript
public readonly syncIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `garbageCollectionEnabled`<sup>Required</sup> <a name="garbageCollectionEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled"></a>

```typescript
public readonly garbageCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `recreatingEnabled`<sup>Required</sup> <a name="recreatingEnabled" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled"></a>

```typescript
public readonly recreatingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryIntervalInSeconds`<sup>Required</sup> <a name="retryIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds"></a>

```typescript
public readonly retryIntervalInSeconds: number;
```

- *Type:* number

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArcKubernetesFluxConfigurationKustomizations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationKustomizations">ArcKubernetesFluxConfigurationKustomizations</a>

---


### ArcKubernetesFluxConfigurationTimeoutsOutputReference <a name="ArcKubernetesFluxConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { arcKubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArcKubernetesFluxConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.arcKubernetesFluxConfiguration.ArcKubernetesFluxConfigurationTimeouts">ArcKubernetesFluxConfigurationTimeouts</a>

---



