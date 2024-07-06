# `machineLearningDatastoreBlobstorage` Submodule <a name="`machineLearningDatastoreBlobstorage` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreBlobstorage <a name="MachineLearningDatastoreBlobstorage" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage azurerm_machine_learning_datastore_blobstorage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer"></a>

```typescript
import { machineLearningDatastoreBlobstorage } from '@cdktf/provider-azurerm'

new machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage(scope: Construct, id: string, config: MachineLearningDatastoreBlobstorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig">MachineLearningDatastoreBlobstorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig">MachineLearningDatastoreBlobstorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetServiceDataAuthIdentity">resetServiceDataAuthIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetSharedAccessSignature">resetSharedAccessSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts"></a>

```typescript
public putTimeouts(value: MachineLearningDatastoreBlobstorageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

---

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetAccountKey"></a>

```typescript
public resetAccountKey(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetServiceDataAuthIdentity` <a name="resetServiceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetServiceDataAuthIdentity"></a>

```typescript
public resetServiceDataAuthIdentity(): void
```

##### `resetSharedAccessSignature` <a name="resetSharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetSharedAccessSignature"></a>

```typescript
public resetSharedAccessSignature(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningDatastoreBlobstorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct"></a>

```typescript
import { machineLearningDatastoreBlobstorage } from '@cdktf/provider-azurerm'

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement"></a>

```typescript
import { machineLearningDatastoreBlobstorage } from '@cdktf/provider-azurerm'

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource"></a>

```typescript
import { machineLearningDatastoreBlobstorage } from '@cdktf/provider-azurerm'

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport"></a>

```typescript
import { machineLearningDatastoreBlobstorage } from '@cdktf/provider-azurerm'

machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MachineLearningDatastoreBlobstorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningDatastoreBlobstorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningDatastoreBlobstorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningDatastoreBlobstorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference">MachineLearningDatastoreBlobstorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentityInput">serviceDataAuthIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignatureInput">sharedAccessSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentity">serviceDataAuthIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignature">sharedAccessSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningDatastoreBlobstorageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference">MachineLearningDatastoreBlobstorageTimeoutsOutputReference</a>

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceDataAuthIdentityInput`<sup>Optional</sup> <a name="serviceDataAuthIdentityInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentityInput"></a>

```typescript
public readonly serviceDataAuthIdentityInput: string;
```

- *Type:* string

---

##### `sharedAccessSignatureInput`<sup>Optional</sup> <a name="sharedAccessSignatureInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignatureInput"></a>

```typescript
public readonly sharedAccessSignatureInput: string;
```

- *Type:* string

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerIdInput"></a>

```typescript
public readonly storageContainerIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MachineLearningDatastoreBlobstorageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceDataAuthIdentity`<sup>Required</sup> <a name="serviceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentity"></a>

```typescript
public readonly serviceDataAuthIdentity: string;
```

- *Type:* string

---

##### `sharedAccessSignature`<sup>Required</sup> <a name="sharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignature"></a>

```typescript
public readonly sharedAccessSignature: string;
```

- *Type:* string

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreBlobstorageConfig <a name="MachineLearningDatastoreBlobstorageConfig" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.Initializer"></a>

```typescript
import { machineLearningDatastoreBlobstorage } from '@cdktf/provider-azurerm'

const machineLearningDatastoreBlobstorageConfig: machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.serviceDataAuthIdentity">serviceDataAuthIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.sharedAccessSignature">sharedAccessSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}.

---

##### `serviceDataAuthIdentity`<sup>Optional</sup> <a name="serviceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.serviceDataAuthIdentity"></a>

```typescript
public readonly serviceDataAuthIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}.

---

##### `sharedAccessSignature`<sup>Optional</sup> <a name="sharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.sharedAccessSignature"></a>

```typescript
public readonly sharedAccessSignature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningDatastoreBlobstorageTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#timeouts MachineLearningDatastoreBlobstorage#timeouts}

---

### MachineLearningDatastoreBlobstorageTimeouts <a name="MachineLearningDatastoreBlobstorageTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.Initializer"></a>

```typescript
import { machineLearningDatastoreBlobstorage } from '@cdktf/provider-azurerm'

const machineLearningDatastoreBlobstorageTimeouts: machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreBlobstorageTimeoutsOutputReference <a name="MachineLearningDatastoreBlobstorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer"></a>

```typescript
import { machineLearningDatastoreBlobstorage } from '@cdktf/provider-azurerm'

new machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineLearningDatastoreBlobstorageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

---



