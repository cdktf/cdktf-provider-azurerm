# `stackHciVirtualHardDisk` Submodule <a name="`stackHciVirtualHardDisk` Submodule" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciVirtualHardDisk <a name="StackHciVirtualHardDisk" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk azurerm_stack_hci_virtual_hard_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer"></a>

```typescript
import { stackHciVirtualHardDisk } from '@cdktf/provider-azurerm'

new stackHciVirtualHardDisk.StackHciVirtualHardDisk(scope: Construct, id: string, config: StackHciVirtualHardDiskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig">StackHciVirtualHardDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig">StackHciVirtualHardDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetBlockSizeInBytes">resetBlockSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDiskFileFormat">resetDiskFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDynamicEnabled">resetDynamicEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetHypervGeneration">resetHypervGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetLogicalSectorInBytes">resetLogicalSectorInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetPhysicalSectorInBytes">resetPhysicalSectorInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetStoragePathId">resetStoragePathId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts"></a>

```typescript
public putTimeouts(value: StackHciVirtualHardDiskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

---

##### `resetBlockSizeInBytes` <a name="resetBlockSizeInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetBlockSizeInBytes"></a>

```typescript
public resetBlockSizeInBytes(): void
```

##### `resetDiskFileFormat` <a name="resetDiskFileFormat" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDiskFileFormat"></a>

```typescript
public resetDiskFileFormat(): void
```

##### `resetDynamicEnabled` <a name="resetDynamicEnabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDynamicEnabled"></a>

```typescript
public resetDynamicEnabled(): void
```

##### `resetHypervGeneration` <a name="resetHypervGeneration" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetHypervGeneration"></a>

```typescript
public resetHypervGeneration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogicalSectorInBytes` <a name="resetLogicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetLogicalSectorInBytes"></a>

```typescript
public resetLogicalSectorInBytes(): void
```

##### `resetPhysicalSectorInBytes` <a name="resetPhysicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetPhysicalSectorInBytes"></a>

```typescript
public resetPhysicalSectorInBytes(): void
```

##### `resetStoragePathId` <a name="resetStoragePathId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetStoragePathId"></a>

```typescript
public resetStoragePathId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciVirtualHardDisk resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct"></a>

```typescript
import { stackHciVirtualHardDisk } from '@cdktf/provider-azurerm'

stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement"></a>

```typescript
import { stackHciVirtualHardDisk } from '@cdktf/provider-azurerm'

stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource"></a>

```typescript
import { stackHciVirtualHardDisk } from '@cdktf/provider-azurerm'

stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport"></a>

```typescript
import { stackHciVirtualHardDisk } from '@cdktf/provider-azurerm'

stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackHciVirtualHardDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackHciVirtualHardDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackHciVirtualHardDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackHciVirtualHardDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference">StackHciVirtualHardDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytesInput">blockSizeInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationIdInput">customLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormatInput">diskFileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGbInput">diskSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabledInput">dynamicEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGenerationInput">hypervGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytesInput">logicalSectorInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytesInput">physicalSectorInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathIdInput">storagePathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytes">blockSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationId">customLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormat">diskFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGb">diskSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabled">dynamicEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGeneration">hypervGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytes">logicalSectorInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytes">physicalSectorInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathId">storagePathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeouts"></a>

```typescript
public readonly timeouts: StackHciVirtualHardDiskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference">StackHciVirtualHardDiskTimeoutsOutputReference</a>

---

##### `blockSizeInBytesInput`<sup>Optional</sup> <a name="blockSizeInBytesInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytesInput"></a>

```typescript
public readonly blockSizeInBytesInput: number;
```

- *Type:* number

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationIdInput"></a>

```typescript
public readonly customLocationIdInput: string;
```

- *Type:* string

---

##### `diskFileFormatInput`<sup>Optional</sup> <a name="diskFileFormatInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormatInput"></a>

```typescript
public readonly diskFileFormatInput: string;
```

- *Type:* string

---

##### `diskSizeInGbInput`<sup>Optional</sup> <a name="diskSizeInGbInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGbInput"></a>

```typescript
public readonly diskSizeInGbInput: number;
```

- *Type:* number

---

##### `dynamicEnabledInput`<sup>Optional</sup> <a name="dynamicEnabledInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabledInput"></a>

```typescript
public readonly dynamicEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hypervGenerationInput`<sup>Optional</sup> <a name="hypervGenerationInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGenerationInput"></a>

```typescript
public readonly hypervGenerationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logicalSectorInBytesInput`<sup>Optional</sup> <a name="logicalSectorInBytesInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytesInput"></a>

```typescript
public readonly logicalSectorInBytesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `physicalSectorInBytesInput`<sup>Optional</sup> <a name="physicalSectorInBytesInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytesInput"></a>

```typescript
public readonly physicalSectorInBytesInput: number;
```

- *Type:* number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `storagePathIdInput`<sup>Optional</sup> <a name="storagePathIdInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathIdInput"></a>

```typescript
public readonly storagePathIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackHciVirtualHardDiskTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

---

##### `blockSizeInBytes`<sup>Required</sup> <a name="blockSizeInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytes"></a>

```typescript
public readonly blockSizeInBytes: number;
```

- *Type:* number

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationId"></a>

```typescript
public readonly customLocationId: string;
```

- *Type:* string

---

##### `diskFileFormat`<sup>Required</sup> <a name="diskFileFormat" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormat"></a>

```typescript
public readonly diskFileFormat: string;
```

- *Type:* string

---

##### `diskSizeInGb`<sup>Required</sup> <a name="diskSizeInGb" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGb"></a>

```typescript
public readonly diskSizeInGb: number;
```

- *Type:* number

---

##### `dynamicEnabled`<sup>Required</sup> <a name="dynamicEnabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabled"></a>

```typescript
public readonly dynamicEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hypervGeneration`<sup>Required</sup> <a name="hypervGeneration" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGeneration"></a>

```typescript
public readonly hypervGeneration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logicalSectorInBytes`<sup>Required</sup> <a name="logicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytes"></a>

```typescript
public readonly logicalSectorInBytes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `physicalSectorInBytes`<sup>Required</sup> <a name="physicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytes"></a>

```typescript
public readonly physicalSectorInBytes: number;
```

- *Type:* number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `storagePathId`<sup>Required</sup> <a name="storagePathId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathId"></a>

```typescript
public readonly storagePathId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciVirtualHardDiskConfig <a name="StackHciVirtualHardDiskConfig" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.Initializer"></a>

```typescript
import { stackHciVirtualHardDisk } from '@cdktf/provider-azurerm'

const stackHciVirtualHardDiskConfig: stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.customLocationId">customLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskSizeInGb">diskSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.blockSizeInBytes">blockSizeInBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskFileFormat">diskFileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dynamicEnabled">dynamicEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.hypervGeneration">hypervGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.logicalSectorInBytes">logicalSectorInBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.physicalSectorInBytes">physicalSectorInBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.storagePathId">storagePathId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.customLocationId"></a>

```typescript
public readonly customLocationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}.

---

##### `diskSizeInGb`<sup>Required</sup> <a name="diskSizeInGb" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskSizeInGb"></a>

```typescript
public readonly diskSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}.

---

##### `blockSizeInBytes`<sup>Optional</sup> <a name="blockSizeInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.blockSizeInBytes"></a>

```typescript
public readonly blockSizeInBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}.

---

##### `diskFileFormat`<sup>Optional</sup> <a name="diskFileFormat" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskFileFormat"></a>

```typescript
public readonly diskFileFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}.

---

##### `dynamicEnabled`<sup>Optional</sup> <a name="dynamicEnabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dynamicEnabled"></a>

```typescript
public readonly dynamicEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}.

---

##### `hypervGeneration`<sup>Optional</sup> <a name="hypervGeneration" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.hypervGeneration"></a>

```typescript
public readonly hypervGeneration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logicalSectorInBytes`<sup>Optional</sup> <a name="logicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.logicalSectorInBytes"></a>

```typescript
public readonly logicalSectorInBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}.

---

##### `physicalSectorInBytes`<sup>Optional</sup> <a name="physicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.physicalSectorInBytes"></a>

```typescript
public readonly physicalSectorInBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}.

---

##### `storagePathId`<sup>Optional</sup> <a name="storagePathId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.storagePathId"></a>

```typescript
public readonly storagePathId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackHciVirtualHardDiskTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#timeouts StackHciVirtualHardDisk#timeouts}

---

### StackHciVirtualHardDiskTimeouts <a name="StackHciVirtualHardDiskTimeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.Initializer"></a>

```typescript
import { stackHciVirtualHardDisk } from '@cdktf/provider-azurerm'

const stackHciVirtualHardDiskTimeouts: stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciVirtualHardDiskTimeoutsOutputReference <a name="StackHciVirtualHardDiskTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackHciVirtualHardDisk } from '@cdktf/provider-azurerm'

new stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciVirtualHardDiskTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

---



