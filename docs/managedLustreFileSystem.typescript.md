# `managedLustreFileSystem` Submodule <a name="`managedLustreFileSystem` Submodule" id="@cdktf/provider-azurerm.managedLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedLustreFileSystem <a name="ManagedLustreFileSystem" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system azurerm_managed_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

new managedLustreFileSystem.ManagedLustreFileSystem(scope: Construct, id: string, config: ManagedLustreFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig">ManagedLustreFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig">ManagedLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting">putHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetHsmSetting">resetHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: ManagedLustreFileSystemEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---

##### `putHsmSetting` <a name="putHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting"></a>

```typescript
public putHsmSetting(value: ManagedLustreFileSystemHsmSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity"></a>

```typescript
public putIdentity(value: ManagedLustreFileSystemIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: ManagedLustreFileSystemMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedLustreFileSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

---

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetHsmSetting` <a name="resetHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetHsmSetting"></a>

```typescript
public resetHsmSetting(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

managedLustreFileSystem.ManagedLustreFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedLustreFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedLustreFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedLustreFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference">ManagedLustreFileSystemEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSetting">hsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference">ManagedLustreFileSystemHsmSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference">ManagedLustreFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference">ManagedLustreFileSystemMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.mgsAddress">mgsAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference">ManagedLustreFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSettingInput">hsmSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTbInput">storageCapacityInTbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTb">storageCapacityInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: ManagedLustreFileSystemEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference">ManagedLustreFileSystemEncryptionKeyOutputReference</a>

---

##### `hsmSetting`<sup>Required</sup> <a name="hsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSetting"></a>

```typescript
public readonly hsmSetting: ManagedLustreFileSystemHsmSettingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference">ManagedLustreFileSystemHsmSettingOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identity"></a>

```typescript
public readonly identity: ManagedLustreFileSystemIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference">ManagedLustreFileSystemIdentityOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: ManagedLustreFileSystemMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference">ManagedLustreFileSystemMaintenanceWindowOutputReference</a>

---

##### `mgsAddress`<sup>Required</sup> <a name="mgsAddress" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.mgsAddress"></a>

```typescript
public readonly mgsAddress: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedLustreFileSystemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference">ManagedLustreFileSystemTimeoutsOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: ManagedLustreFileSystemEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---

##### `hsmSettingInput`<sup>Optional</sup> <a name="hsmSettingInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSettingInput"></a>

```typescript
public readonly hsmSettingInput: ManagedLustreFileSystemHsmSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identityInput"></a>

```typescript
public readonly identityInput: ManagedLustreFileSystemIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: ManagedLustreFileSystemMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `storageCapacityInTbInput`<sup>Optional</sup> <a name="storageCapacityInTbInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTbInput"></a>

```typescript
public readonly storageCapacityInTbInput: number;
```

- *Type:* number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedLustreFileSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `storageCapacityInTb`<sup>Required</sup> <a name="storageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTb"></a>

```typescript
public readonly storageCapacityInTb: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedLustreFileSystemConfig <a name="ManagedLustreFileSystemConfig" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

const managedLustreFileSystemConfig: managedLustreFileSystem.ManagedLustreFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.storageCapacityInTb">storageCapacityInTb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.hsmSetting">hsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | hsm_setting block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}.

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: ManagedLustreFileSystemMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#maintenance_window ManagedLustreFileSystem#maintenance_window}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}.

---

##### `storageCapacityInTb`<sup>Required</sup> <a name="storageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.storageCapacityInTb"></a>

```typescript
public readonly storageCapacityInTb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: ManagedLustreFileSystemEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#encryption_key ManagedLustreFileSystem#encryption_key}

---

##### `hsmSetting`<sup>Optional</sup> <a name="hsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.hsmSetting"></a>

```typescript
public readonly hsmSetting: ManagedLustreFileSystemHsmSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

hsm_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#hsm_setting ManagedLustreFileSystem#hsm_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.identity"></a>

```typescript
public readonly identity: ManagedLustreFileSystemIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#identity ManagedLustreFileSystem#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedLustreFileSystemTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#timeouts ManagedLustreFileSystem#timeouts}

---

### ManagedLustreFileSystemEncryptionKey <a name="ManagedLustreFileSystemEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

const managedLustreFileSystemEncryptionKey: managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.keyUrl">keyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.sourceVaultId">sourceVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}. |

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.keyUrl"></a>

```typescript
public readonly keyUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}.

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.sourceVaultId"></a>

```typescript
public readonly sourceVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}.

---

### ManagedLustreFileSystemHsmSetting <a name="ManagedLustreFileSystemHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

const managedLustreFileSystemHsmSetting: managedLustreFileSystem.ManagedLustreFileSystemHsmSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.containerId">containerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.loggingContainerId">loggingContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.importPrefix">importPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}.

---

##### `loggingContainerId`<sup>Required</sup> <a name="loggingContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.loggingContainerId"></a>

```typescript
public readonly loggingContainerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}.

---

##### `importPrefix`<sup>Optional</sup> <a name="importPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.importPrefix"></a>

```typescript
public readonly importPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}.

---

### ManagedLustreFileSystemIdentity <a name="ManagedLustreFileSystemIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

const managedLustreFileSystemIdentity: managedLustreFileSystem.ManagedLustreFileSystemIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}.

---

### ManagedLustreFileSystemMaintenanceWindow <a name="ManagedLustreFileSystemMaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

const managedLustreFileSystemMaintenanceWindow: managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.timeOfDayInUtc">timeOfDayInUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}.

---

##### `timeOfDayInUtc`<sup>Required</sup> <a name="timeOfDayInUtc" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.timeOfDayInUtc"></a>

```typescript
public readonly timeOfDayInUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}.

---

### ManagedLustreFileSystemTimeouts <a name="ManagedLustreFileSystemTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

const managedLustreFileSystemTimeouts: managedLustreFileSystem.ManagedLustreFileSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedLustreFileSystemEncryptionKeyOutputReference <a name="ManagedLustreFileSystemEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

new managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrlInput">keyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrl">keyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyUrlInput`<sup>Optional</sup> <a name="keyUrlInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrlInput"></a>

```typescript
public readonly keyUrlInput: string;
```

- *Type:* string

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```typescript
public readonly sourceVaultIdInput: string;
```

- *Type:* string

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrl"></a>

```typescript
public readonly keyUrl: string;
```

- *Type:* string

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultId"></a>

```typescript
public readonly sourceVaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedLustreFileSystemEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---


### ManagedLustreFileSystemHsmSettingOutputReference <a name="ManagedLustreFileSystemHsmSettingOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

new managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resetImportPrefix">resetImportPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImportPrefix` <a name="resetImportPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resetImportPrefix"></a>

```typescript
public resetImportPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefixInput">importPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerIdInput">loggingContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefix">importPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerId">loggingContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerIdInput"></a>

```typescript
public readonly containerIdInput: string;
```

- *Type:* string

---

##### `importPrefixInput`<sup>Optional</sup> <a name="importPrefixInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefixInput"></a>

```typescript
public readonly importPrefixInput: string;
```

- *Type:* string

---

##### `loggingContainerIdInput`<sup>Optional</sup> <a name="loggingContainerIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerIdInput"></a>

```typescript
public readonly loggingContainerIdInput: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `importPrefix`<sup>Required</sup> <a name="importPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefix"></a>

```typescript
public readonly importPrefix: string;
```

- *Type:* string

---

##### `loggingContainerId`<sup>Required</sup> <a name="loggingContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerId"></a>

```typescript
public readonly loggingContainerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedLustreFileSystemHsmSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---


### ManagedLustreFileSystemIdentityOutputReference <a name="ManagedLustreFileSystemIdentityOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

new managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedLustreFileSystemIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---


### ManagedLustreFileSystemMaintenanceWindowOutputReference <a name="ManagedLustreFileSystemMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

new managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtcInput">timeOfDayInUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtc">timeOfDayInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `timeOfDayInUtcInput`<sup>Optional</sup> <a name="timeOfDayInUtcInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtcInput"></a>

```typescript
public readonly timeOfDayInUtcInput: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `timeOfDayInUtc`<sup>Required</sup> <a name="timeOfDayInUtc" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtc"></a>

```typescript
public readonly timeOfDayInUtc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedLustreFileSystemMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---


### ManagedLustreFileSystemTimeoutsOutputReference <a name="ManagedLustreFileSystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedLustreFileSystem } from '@cdktf/provider-azurerm'

new managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedLustreFileSystemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

---



