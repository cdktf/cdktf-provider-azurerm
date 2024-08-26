# `kubernetesFluxConfiguration` Submodule <a name="`kubernetesFluxConfiguration` Submodule" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFluxConfiguration <a name="KubernetesFluxConfiguration" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration azurerm_kubernetes_flux_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfiguration(scope: Construct, id: string, config: KubernetesFluxConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig">KubernetesFluxConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig">KubernetesFluxConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage">putBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket">putBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations">putKustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBlobStorage">resetBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetContinuousReconciliationEnabled">resetContinuousReconciliationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlobStorage` <a name="putBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage"></a>

```typescript
public putBlobStorage(value: KubernetesFluxConfigurationBlobStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---

##### `putBucket` <a name="putBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket"></a>

```typescript
public putBucket(value: KubernetesFluxConfigurationBucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---

##### `putGitRepository` <a name="putGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository"></a>

```typescript
public putGitRepository(value: KubernetesFluxConfigurationGitRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---

##### `putKustomizations` <a name="putKustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations"></a>

```typescript
public putKustomizations(value: IResolvable | KubernetesFluxConfigurationKustomizations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: KubernetesFluxConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

---

##### `resetBlobStorage` <a name="resetBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBlobStorage"></a>

```typescript
public resetBlobStorage(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetContinuousReconciliationEnabled` <a name="resetContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetContinuousReconciliationEnabled"></a>

```typescript
public resetContinuousReconciliationEnabled(): void
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetGitRepository"></a>

```typescript
public resetGitRepository(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesFluxConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesFluxConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesFluxConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFluxConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference">KubernetesFluxConfigurationBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference">KubernetesFluxConfigurationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference">KubernetesFluxConfigurationGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizations">kustomizations</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList">KubernetesFluxConfigurationKustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference">KubernetesFluxConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorageInput">blobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucketInput">bucketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabledInput">continuousReconciliationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizationsInput">kustomizationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blobStorage`<sup>Required</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorage"></a>

```typescript
public readonly blobStorage: KubernetesFluxConfigurationBlobStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference">KubernetesFluxConfigurationBlobStorageOutputReference</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucket"></a>

```typescript
public readonly bucket: KubernetesFluxConfigurationBucketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference">KubernetesFluxConfigurationBucketOutputReference</a>

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepository"></a>

```typescript
public readonly gitRepository: KubernetesFluxConfigurationGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference">KubernetesFluxConfigurationGitRepositoryOutputReference</a>

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizations"></a>

```typescript
public readonly kustomizations: KubernetesFluxConfigurationKustomizationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList">KubernetesFluxConfigurationKustomizationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesFluxConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference">KubernetesFluxConfigurationTimeoutsOutputReference</a>

---

##### `blobStorageInput`<sup>Optional</sup> <a name="blobStorageInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorageInput"></a>

```typescript
public readonly blobStorageInput: KubernetesFluxConfigurationBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucketInput"></a>

```typescript
public readonly bucketInput: KubernetesFluxConfigurationBucket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `continuousReconciliationEnabledInput`<sup>Optional</sup> <a name="continuousReconciliationEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabledInput"></a>

```typescript
public readonly continuousReconciliationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepositoryInput"></a>

```typescript
public readonly gitRepositoryInput: KubernetesFluxConfigurationGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kustomizationsInput`<sup>Optional</sup> <a name="kustomizationsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizationsInput"></a>

```typescript
public readonly kustomizationsInput: IResolvable | KubernetesFluxConfigurationKustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KubernetesFluxConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `continuousReconciliationEnabled`<sup>Required</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabled"></a>

```typescript
public readonly continuousReconciliationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFluxConfigurationBlobStorage <a name="KubernetesFluxConfigurationBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const kubernetesFluxConfigurationBlobStorage: kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.containerId">containerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.managedIdentity">managedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.sasToken">sasToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `managedIdentity`<sup>Optional</sup> <a name="managedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.managedIdentity"></a>

```typescript
public readonly managedIdentity: KubernetesFluxConfigurationBlobStorageManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#managed_identity KubernetesFluxConfiguration#managed_identity}

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}.

---

##### `servicePrincipal`<sup>Optional</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: KubernetesFluxConfigurationBlobStorageServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#service_principal KubernetesFluxConfiguration#service_principal}

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationBlobStorageManagedIdentity <a name="KubernetesFluxConfigurationBlobStorageManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const kubernetesFluxConfigurationBlobStorageManagedIdentity: kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}.

---

### KubernetesFluxConfigurationBlobStorageServicePrincipal <a name="KubernetesFluxConfigurationBlobStorageServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const kubernetesFluxConfigurationBlobStorageServicePrincipal: kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64">clientCertificateBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain">clientCertificateSendChain</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}.

---

##### `clientCertificateBase64`<sup>Optional</sup> <a name="clientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64"></a>

```typescript
public readonly clientCertificateBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}.

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}.

---

##### `clientCertificateSendChain`<sup>Optional</sup> <a name="clientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain"></a>

```typescript
public readonly clientCertificateSendChain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}.

---

### KubernetesFluxConfigurationBucket <a name="KubernetesFluxConfigurationBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const kubernetesFluxConfigurationBucket: kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.secretKeyBase64">secretKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}.

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `secretKeyBase64`<sup>Optional</sup> <a name="secretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.secretKeyBase64"></a>

```typescript
public readonly secretKeyBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}.

---

### KubernetesFluxConfigurationConfig <a name="KubernetesFluxConfigurationConfig" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const kubernetesFluxConfigurationConfig: kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.kustomizations">kustomizations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>[]</code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.blobStorage">blobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled">continuousReconciliationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}.

---

##### `kustomizations`<sup>Required</sup> <a name="kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.kustomizations"></a>

```typescript
public readonly kustomizations: IResolvable | KubernetesFluxConfigurationKustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>[]

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#kustomizations KubernetesFluxConfiguration#kustomizations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}.

---

##### `blobStorage`<sup>Optional</sup> <a name="blobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.blobStorage"></a>

```typescript
public readonly blobStorage: KubernetesFluxConfigurationBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#blob_storage KubernetesFluxConfiguration#blob_storage}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.bucket"></a>

```typescript
public readonly bucket: KubernetesFluxConfigurationBucket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#bucket KubernetesFluxConfiguration#bucket}

---

##### `continuousReconciliationEnabled`<sup>Optional</sup> <a name="continuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled"></a>

```typescript
public readonly continuousReconciliationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.gitRepository"></a>

```typescript
public readonly gitRepository: KubernetesFluxConfigurationGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#git_repository KubernetesFluxConfiguration#git_repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesFluxConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeouts KubernetesFluxConfiguration#timeouts}

---

### KubernetesFluxConfigurationGitRepository <a name="KubernetesFluxConfigurationGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const kubernetesFluxConfigurationGitRepository: kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceType">referenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceValue">referenceValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64">httpsCaCertBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsKeyBase64">httpsKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsUser">httpsUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64">sshKnownHostsBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64">sshPrivateKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceType"></a>

```typescript
public readonly referenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}.

---

##### `referenceValue`<sup>Required</sup> <a name="referenceValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceValue"></a>

```typescript
public readonly referenceValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}.

---

##### `httpsCaCertBase64`<sup>Optional</sup> <a name="httpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64"></a>

```typescript
public readonly httpsCaCertBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}.

---

##### `httpsKeyBase64`<sup>Optional</sup> <a name="httpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsKeyBase64"></a>

```typescript
public readonly httpsKeyBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}.

---

##### `httpsUser`<sup>Optional</sup> <a name="httpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsUser"></a>

```typescript
public readonly httpsUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}.

---

##### `localAuthReference`<sup>Optional</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `sshKnownHostsBase64`<sup>Optional</sup> <a name="sshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64"></a>

```typescript
public readonly sshKnownHostsBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

##### `sshPrivateKeyBase64`<sup>Optional</sup> <a name="sshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64"></a>

```typescript
public readonly sshPrivateKeyBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationKustomizations <a name="KubernetesFluxConfigurationKustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const kubernetesFluxConfigurationKustomizations: kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled">garbageCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.recreatingEnabled">recreatingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds">retryIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}.

---

##### `garbageCollectionEnabled`<sup>Optional</sup> <a name="garbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled"></a>

```typescript
public readonly garbageCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}.

---

##### `recreatingEnabled`<sup>Optional</sup> <a name="recreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.recreatingEnabled"></a>

```typescript
public readonly recreatingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}.

---

##### `retryIntervalInSeconds`<sup>Optional</sup> <a name="retryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds"></a>

```typescript
public readonly retryIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}.

---

##### `syncIntervalInSeconds`<sup>Optional</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationTimeouts <a name="KubernetesFluxConfigurationTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

const kubernetesFluxConfigurationTimeouts: kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference <a name="KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFluxConfigurationBlobStorageManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---


### KubernetesFluxConfigurationBlobStorageOutputReference <a name="KubernetesFluxConfigurationBlobStorageOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity">putManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal">putServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetManagedIdentity">resetManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken">resetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal">resetServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedIdentity` <a name="putManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity"></a>

```typescript
public putManagedIdentity(value: KubernetesFluxConfigurationBlobStorageManagedIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---

##### `putServicePrincipal` <a name="putServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal"></a>

```typescript
public putServicePrincipal(value: KubernetesFluxConfigurationBlobStorageServicePrincipal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey"></a>

```typescript
public resetAccountKey(): void
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference"></a>

```typescript
public resetLocalAuthReference(): void
```

##### `resetManagedIdentity` <a name="resetManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetManagedIdentity"></a>

```typescript
public resetManagedIdentity(): void
```

##### `resetSasToken` <a name="resetSasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken"></a>

```typescript
public resetSasToken(): void
```

##### `resetServicePrincipal` <a name="resetServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal"></a>

```typescript
public resetServicePrincipal(): void
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds"></a>

```typescript
public resetSyncIntervalInSeconds(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentity">managedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference">KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentityInput">managedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput">sasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken">sasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedIdentity`<sup>Required</sup> <a name="managedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentity"></a>

```typescript
public readonly managedIdentity: KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference">KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference</a>

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a>

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput"></a>

```typescript
public readonly containerIdInput: string;
```

- *Type:* string

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput"></a>

```typescript
public readonly localAuthReferenceInput: string;
```

- *Type:* string

---

##### `managedIdentityInput`<sup>Optional</sup> <a name="managedIdentityInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentityInput"></a>

```typescript
public readonly managedIdentityInput: KubernetesFluxConfigurationBlobStorageManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput"></a>

```typescript
public readonly sasTokenInput: string;
```

- *Type:* string

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput"></a>

```typescript
public readonly servicePrincipalInput: KubernetesFluxConfigurationBlobStorageServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput"></a>

```typescript
public readonly syncIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFluxConfigurationBlobStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---


### KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference <a name="KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64">resetClientCertificateBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain">resetClientCertificateSendChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificateBase64` <a name="resetClientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64"></a>

```typescript
public resetClientCertificateBase64(): void
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword"></a>

```typescript
public resetClientCertificatePassword(): void
```

##### `resetClientCertificateSendChain` <a name="resetClientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain"></a>

```typescript
public resetClientCertificateSendChain(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input">clientCertificateBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput">clientCertificateSendChainInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64">clientCertificateBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain">clientCertificateSendChain</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificateBase64Input`<sup>Optional</sup> <a name="clientCertificateBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input"></a>

```typescript
public readonly clientCertificateBase64Input: string;
```

- *Type:* string

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput"></a>

```typescript
public readonly clientCertificatePasswordInput: string;
```

- *Type:* string

---

##### `clientCertificateSendChainInput`<sup>Optional</sup> <a name="clientCertificateSendChainInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput"></a>

```typescript
public readonly clientCertificateSendChainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientCertificateBase64`<sup>Required</sup> <a name="clientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64"></a>

```typescript
public readonly clientCertificateBase64: string;
```

- *Type:* string

---

##### `clientCertificatePassword`<sup>Required</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword"></a>

```typescript
public readonly clientCertificatePassword: string;
```

- *Type:* string

---

##### `clientCertificateSendChain`<sup>Required</sup> <a name="clientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain"></a>

```typescript
public readonly clientCertificateSendChain: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFluxConfigurationBlobStorageServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---


### KubernetesFluxConfigurationBucketOutputReference <a name="KubernetesFluxConfigurationBucketOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64">resetSecretKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference"></a>

```typescript
public resetLocalAuthReference(): void
```

##### `resetSecretKeyBase64` <a name="resetSecretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64"></a>

```typescript
public resetSecretKeyBase64(): void
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds"></a>

```typescript
public resetSyncIntervalInSeconds(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled"></a>

```typescript
public resetTlsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input">secretKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64">secretKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput"></a>

```typescript
public readonly localAuthReferenceInput: string;
```

- *Type:* string

---

##### `secretKeyBase64Input`<sup>Optional</sup> <a name="secretKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input"></a>

```typescript
public readonly secretKeyBase64Input: string;
```

- *Type:* string

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput"></a>

```typescript
public readonly syncIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput"></a>

```typescript
public readonly tlsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

---

##### `secretKeyBase64`<sup>Required</sup> <a name="secretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64"></a>

```typescript
public readonly secretKeyBase64: string;
```

- *Type:* string

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFluxConfigurationBucket;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---


### KubernetesFluxConfigurationGitRepositoryOutputReference <a name="KubernetesFluxConfigurationGitRepositoryOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64">resetHttpsCaCertBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64">resetHttpsKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser">resetHttpsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference">resetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64">resetSshKnownHostsBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64">resetSshPrivateKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpsCaCertBase64` <a name="resetHttpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64"></a>

```typescript
public resetHttpsCaCertBase64(): void
```

##### `resetHttpsKeyBase64` <a name="resetHttpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64"></a>

```typescript
public resetHttpsKeyBase64(): void
```

##### `resetHttpsUser` <a name="resetHttpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser"></a>

```typescript
public resetHttpsUser(): void
```

##### `resetLocalAuthReference` <a name="resetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference"></a>

```typescript
public resetLocalAuthReference(): void
```

##### `resetSshKnownHostsBase64` <a name="resetSshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64"></a>

```typescript
public resetSshKnownHostsBase64(): void
```

##### `resetSshPrivateKeyBase64` <a name="resetSshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64"></a>

```typescript
public resetSshPrivateKeyBase64(): void
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds"></a>

```typescript
public resetSyncIntervalInSeconds(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input">httpsCaCertBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input">httpsKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput">httpsUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput">localAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput">referenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput">referenceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input">sshKnownHostsBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input">sshPrivateKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64">httpsCaCertBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64">httpsKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser">httpsUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference">localAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType">referenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue">referenceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64">sshKnownHostsBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64">sshPrivateKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpsCaCertBase64Input`<sup>Optional</sup> <a name="httpsCaCertBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input"></a>

```typescript
public readonly httpsCaCertBase64Input: string;
```

- *Type:* string

---

##### `httpsKeyBase64Input`<sup>Optional</sup> <a name="httpsKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input"></a>

```typescript
public readonly httpsKeyBase64Input: string;
```

- *Type:* string

---

##### `httpsUserInput`<sup>Optional</sup> <a name="httpsUserInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput"></a>

```typescript
public readonly httpsUserInput: string;
```

- *Type:* string

---

##### `localAuthReferenceInput`<sup>Optional</sup> <a name="localAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput"></a>

```typescript
public readonly localAuthReferenceInput: string;
```

- *Type:* string

---

##### `referenceTypeInput`<sup>Optional</sup> <a name="referenceTypeInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput"></a>

```typescript
public readonly referenceTypeInput: string;
```

- *Type:* string

---

##### `referenceValueInput`<sup>Optional</sup> <a name="referenceValueInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput"></a>

```typescript
public readonly referenceValueInput: string;
```

- *Type:* string

---

##### `sshKnownHostsBase64Input`<sup>Optional</sup> <a name="sshKnownHostsBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input"></a>

```typescript
public readonly sshKnownHostsBase64Input: string;
```

- *Type:* string

---

##### `sshPrivateKeyBase64Input`<sup>Optional</sup> <a name="sshPrivateKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input"></a>

```typescript
public readonly sshPrivateKeyBase64Input: string;
```

- *Type:* string

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput"></a>

```typescript
public readonly syncIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `httpsCaCertBase64`<sup>Required</sup> <a name="httpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64"></a>

```typescript
public readonly httpsCaCertBase64: string;
```

- *Type:* string

---

##### `httpsKeyBase64`<sup>Required</sup> <a name="httpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64"></a>

```typescript
public readonly httpsKeyBase64: string;
```

- *Type:* string

---

##### `httpsUser`<sup>Required</sup> <a name="httpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser"></a>

```typescript
public readonly httpsUser: string;
```

- *Type:* string

---

##### `localAuthReference`<sup>Required</sup> <a name="localAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference"></a>

```typescript
public readonly localAuthReference: string;
```

- *Type:* string

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType"></a>

```typescript
public readonly referenceType: string;
```

- *Type:* string

---

##### `referenceValue`<sup>Required</sup> <a name="referenceValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue"></a>

```typescript
public readonly referenceValue: string;
```

- *Type:* string

---

##### `sshKnownHostsBase64`<sup>Required</sup> <a name="sshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64"></a>

```typescript
public readonly sshKnownHostsBase64: string;
```

- *Type:* string

---

##### `sshPrivateKeyBase64`<sup>Required</sup> <a name="sshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64"></a>

```typescript
public readonly sshPrivateKeyBase64: string;
```

- *Type:* string

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFluxConfigurationGitRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---


### KubernetesFluxConfigurationKustomizationsList <a name="KubernetesFluxConfigurationKustomizationsList" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get"></a>

```typescript
public get(index: number): KubernetesFluxConfigurationKustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFluxConfigurationKustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>[]

---


### KubernetesFluxConfigurationKustomizationsOutputReference <a name="KubernetesFluxConfigurationKustomizationsOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled">resetGarbageCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled">resetRecreatingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds">resetRetryIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds">resetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn"></a>

```typescript
public resetDependsOn(): void
```

##### `resetGarbageCollectionEnabled` <a name="resetGarbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled"></a>

```typescript
public resetGarbageCollectionEnabled(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRecreatingEnabled` <a name="resetRecreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled"></a>

```typescript
public resetRecreatingEnabled(): void
```

##### `resetRetryIntervalInSeconds` <a name="resetRetryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds"></a>

```typescript
public resetRetryIntervalInSeconds(): void
```

##### `resetSyncIntervalInSeconds` <a name="resetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds"></a>

```typescript
public resetSyncIntervalInSeconds(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput">garbageCollectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput">recreatingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput">retryIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput">syncIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled">garbageCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled">recreatingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds">retryIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds">syncIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput"></a>

```typescript
public readonly dependsOnInput: string[];
```

- *Type:* string[]

---

##### `garbageCollectionEnabledInput`<sup>Optional</sup> <a name="garbageCollectionEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput"></a>

```typescript
public readonly garbageCollectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `recreatingEnabledInput`<sup>Optional</sup> <a name="recreatingEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput"></a>

```typescript
public readonly recreatingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryIntervalInSecondsInput`<sup>Optional</sup> <a name="retryIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput"></a>

```typescript
public readonly retryIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `syncIntervalInSecondsInput`<sup>Optional</sup> <a name="syncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput"></a>

```typescript
public readonly syncIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `garbageCollectionEnabled`<sup>Required</sup> <a name="garbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled"></a>

```typescript
public readonly garbageCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `recreatingEnabled`<sup>Required</sup> <a name="recreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled"></a>

```typescript
public readonly recreatingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryIntervalInSeconds`<sup>Required</sup> <a name="retryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds"></a>

```typescript
public readonly retryIntervalInSeconds: number;
```

- *Type:* number

---

##### `syncIntervalInSeconds`<sup>Required</sup> <a name="syncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds"></a>

```typescript
public readonly syncIntervalInSeconds: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFluxConfigurationKustomizations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations">KubernetesFluxConfigurationKustomizations</a>

---


### KubernetesFluxConfigurationTimeoutsOutputReference <a name="KubernetesFluxConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { kubernetesFluxConfiguration } from '@cdktf/provider-azurerm'

new kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFluxConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

---



