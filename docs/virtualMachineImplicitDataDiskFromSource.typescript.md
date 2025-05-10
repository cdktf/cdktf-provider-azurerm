# `virtualMachineImplicitDataDiskFromSource` Submodule <a name="`virtualMachineImplicitDataDiskFromSource` Submodule" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineImplicitDataDiskFromSource <a name="VirtualMachineImplicitDataDiskFromSource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source azurerm_virtual_machine_implicit_data_disk_from_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer"></a>

```typescript
import { virtualMachineImplicitDataDiskFromSource } from '@cdktf/provider-azurerm'

new virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource(scope: Construct, id: string, config: VirtualMachineImplicitDataDiskFromSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig">VirtualMachineImplicitDataDiskFromSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig">VirtualMachineImplicitDataDiskFromSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetCaching">resetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetWriteAcceleratorEnabled">resetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualMachineImplicitDataDiskFromSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

---

##### `resetCaching` <a name="resetCaching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetCaching"></a>

```typescript
public resetCaching(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWriteAcceleratorEnabled` <a name="resetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetWriteAcceleratorEnabled"></a>

```typescript
public resetWriteAcceleratorEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineImplicitDataDiskFromSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct"></a>

```typescript
import { virtualMachineImplicitDataDiskFromSource } from '@cdktf/provider-azurerm'

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement"></a>

```typescript
import { virtualMachineImplicitDataDiskFromSource } from '@cdktf/provider-azurerm'

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource"></a>

```typescript
import { virtualMachineImplicitDataDiskFromSource } from '@cdktf/provider-azurerm'

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport"></a>

```typescript
import { virtualMachineImplicitDataDiskFromSource } from '@cdktf/provider-azurerm'

virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualMachineImplicitDataDiskFromSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineImplicitDataDiskFromSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineImplicitDataDiskFromSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineImplicitDataDiskFromSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference">VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cachingInput">cachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOptionInput">createOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lunInput">lunInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceIdInput">sourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabledInput">writeAcceleratorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.caching">caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOption">createOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference">VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference</a>

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cachingInput"></a>

```typescript
public readonly cachingInput: string;
```

- *Type:* string

---

##### `createOptionInput`<sup>Optional</sup> <a name="createOptionInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOptionInput"></a>

```typescript
public readonly createOptionInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lunInput"></a>

```typescript
public readonly lunInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceResourceIdInput`<sup>Optional</sup> <a name="sourceResourceIdInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceIdInput"></a>

```typescript
public readonly sourceResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualMachineImplicitDataDiskFromSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `writeAcceleratorEnabledInput`<sup>Optional</sup> <a name="writeAcceleratorEnabledInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabledInput"></a>

```typescript
public readonly writeAcceleratorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOption"></a>

```typescript
public readonly createOption: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

##### `writeAcceleratorEnabled`<sup>Required</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabled"></a>

```typescript
public readonly writeAcceleratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineImplicitDataDiskFromSourceConfig <a name="VirtualMachineImplicitDataDiskFromSourceConfig" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.Initializer"></a>

```typescript
import { virtualMachineImplicitDataDiskFromSource } from '@cdktf/provider-azurerm'

const virtualMachineImplicitDataDiskFromSourceConfig: virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.createOption">createOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lun">lun</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.caching">caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.writeAcceleratorEnabled">writeAcceleratorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.createOption"></a>

```typescript
public readonly createOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}.

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}.

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}.

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineImplicitDataDiskFromSourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#timeouts VirtualMachineImplicitDataDiskFromSource#timeouts}

---

##### `writeAcceleratorEnabled`<sup>Optional</sup> <a name="writeAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.writeAcceleratorEnabled"></a>

```typescript
public readonly writeAcceleratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}.

---

### VirtualMachineImplicitDataDiskFromSourceTimeouts <a name="VirtualMachineImplicitDataDiskFromSourceTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.Initializer"></a>

```typescript
import { virtualMachineImplicitDataDiskFromSource } from '@cdktf/provider-azurerm'

const virtualMachineImplicitDataDiskFromSourceTimeouts: virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference <a name="VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualMachineImplicitDataDiskFromSource } from '@cdktf/provider-azurerm'

new virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineImplicitDataDiskFromSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

---



