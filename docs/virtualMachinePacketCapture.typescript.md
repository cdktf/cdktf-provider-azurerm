# `virtualMachinePacketCapture` Submodule <a name="`virtualMachinePacketCapture` Submodule" id="@cdktf/provider-azurerm.virtualMachinePacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachinePacketCapture <a name="VirtualMachinePacketCapture" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture azurerm_virtual_machine_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

new virtualMachinePacketCapture.VirtualMachinePacketCapture(scope: Construct, id: string, config: VirtualMachinePacketCaptureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig">VirtualMachinePacketCaptureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig">VirtualMachinePacketCaptureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation">putStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerPacket">resetMaximumBytesPerPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerSession">resetMaximumBytesPerSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumCaptureDurationInSeconds">resetMaximumCaptureDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter"></a>

```typescript
public putFilter(value: IResolvable | VirtualMachinePacketCaptureFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>[]

---

##### `putStorageLocation` <a name="putStorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation"></a>

```typescript
public putStorageLocation(value: VirtualMachinePacketCaptureStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualMachinePacketCaptureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaximumBytesPerPacket` <a name="resetMaximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerPacket"></a>

```typescript
public resetMaximumBytesPerPacket(): void
```

##### `resetMaximumBytesPerSession` <a name="resetMaximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumBytesPerSession"></a>

```typescript
public resetMaximumBytesPerSession(): void
```

##### `resetMaximumCaptureDurationInSeconds` <a name="resetMaximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetMaximumCaptureDurationInSeconds"></a>

```typescript
public resetMaximumCaptureDurationInSeconds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachinePacketCapture resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualMachinePacketCapture resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachinePacketCapture to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachinePacketCapture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachinePacketCapture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList">VirtualMachinePacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference">VirtualMachinePacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference">VirtualMachinePacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacketInput">maximumBytesPerPacketInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSessionInput">maximumBytesPerSessionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSecondsInput">maximumCaptureDurationInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherIdInput">networkWatcherIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocationInput">storageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacket">maximumBytesPerPacket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSession">maximumBytesPerSession</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSeconds">maximumCaptureDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherId">networkWatcherId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filter"></a>

```typescript
public readonly filter: VirtualMachinePacketCaptureFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList">VirtualMachinePacketCaptureFilterList</a>

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocation"></a>

```typescript
public readonly storageLocation: VirtualMachinePacketCaptureStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference">VirtualMachinePacketCaptureStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachinePacketCaptureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference">VirtualMachinePacketCaptureTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | VirtualMachinePacketCaptureFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maximumBytesPerPacketInput`<sup>Optional</sup> <a name="maximumBytesPerPacketInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacketInput"></a>

```typescript
public readonly maximumBytesPerPacketInput: number;
```

- *Type:* number

---

##### `maximumBytesPerSessionInput`<sup>Optional</sup> <a name="maximumBytesPerSessionInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSessionInput"></a>

```typescript
public readonly maximumBytesPerSessionInput: number;
```

- *Type:* number

---

##### `maximumCaptureDurationInSecondsInput`<sup>Optional</sup> <a name="maximumCaptureDurationInSecondsInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSecondsInput"></a>

```typescript
public readonly maximumCaptureDurationInSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkWatcherIdInput`<sup>Optional</sup> <a name="networkWatcherIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherIdInput"></a>

```typescript
public readonly networkWatcherIdInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: VirtualMachinePacketCaptureStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualMachinePacketCaptureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maximumBytesPerPacket`<sup>Required</sup> <a name="maximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerPacket"></a>

```typescript
public readonly maximumBytesPerPacket: number;
```

- *Type:* number

---

##### `maximumBytesPerSession`<sup>Required</sup> <a name="maximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumBytesPerSession"></a>

```typescript
public readonly maximumBytesPerSession: number;
```

- *Type:* number

---

##### `maximumCaptureDurationInSeconds`<sup>Required</sup> <a name="maximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.maximumCaptureDurationInSeconds"></a>

```typescript
public readonly maximumCaptureDurationInSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkWatcherId`<sup>Required</sup> <a name="networkWatcherId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.networkWatcherId"></a>

```typescript
public readonly networkWatcherId: string;
```

- *Type:* string

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCapture.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachinePacketCaptureConfig <a name="VirtualMachinePacketCaptureConfig" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

const virtualMachinePacketCaptureConfig: virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.networkWatcherId">networkWatcherId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerPacket">maximumBytesPerPacket</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerSession">maximumBytesPerSession</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumCaptureDurationInSeconds">maximumCaptureDurationInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#name VirtualMachinePacketCapture#name}.

---

##### `networkWatcherId`<sup>Required</sup> <a name="networkWatcherId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.networkWatcherId"></a>

```typescript
public readonly networkWatcherId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#network_watcher_id VirtualMachinePacketCapture#network_watcher_id}.

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.storageLocation"></a>

```typescript
public readonly storageLocation: VirtualMachinePacketCaptureStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#storage_location VirtualMachinePacketCapture#storage_location}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#virtual_machine_id VirtualMachinePacketCapture#virtual_machine_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | VirtualMachinePacketCaptureFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#filter VirtualMachinePacketCapture#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#id VirtualMachinePacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumBytesPerPacket`<sup>Optional</sup> <a name="maximumBytesPerPacket" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerPacket"></a>

```typescript
public readonly maximumBytesPerPacket: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_packet VirtualMachinePacketCapture#maximum_bytes_per_packet}.

---

##### `maximumBytesPerSession`<sup>Optional</sup> <a name="maximumBytesPerSession" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumBytesPerSession"></a>

```typescript
public readonly maximumBytesPerSession: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#maximum_bytes_per_session VirtualMachinePacketCapture#maximum_bytes_per_session}.

---

##### `maximumCaptureDurationInSeconds`<sup>Optional</sup> <a name="maximumCaptureDurationInSeconds" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.maximumCaptureDurationInSeconds"></a>

```typescript
public readonly maximumCaptureDurationInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#maximum_capture_duration_in_seconds VirtualMachinePacketCapture#maximum_capture_duration_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachinePacketCaptureTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#timeouts VirtualMachinePacketCapture#timeouts}

---

### VirtualMachinePacketCaptureFilter <a name="VirtualMachinePacketCaptureFilter" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

const virtualMachinePacketCaptureFilter: virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localIpAddress">localIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localPort">localPort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remoteIpAddress">remoteIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remotePort">remotePort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#protocol VirtualMachinePacketCapture#protocol}.

---

##### `localIpAddress`<sup>Optional</sup> <a name="localIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localIpAddress"></a>

```typescript
public readonly localIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#local_ip_address VirtualMachinePacketCapture#local_ip_address}.

---

##### `localPort`<sup>Optional</sup> <a name="localPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.localPort"></a>

```typescript
public readonly localPort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#local_port VirtualMachinePacketCapture#local_port}.

---

##### `remoteIpAddress`<sup>Optional</sup> <a name="remoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remoteIpAddress"></a>

```typescript
public readonly remoteIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#remote_ip_address VirtualMachinePacketCapture#remote_ip_address}.

---

##### `remotePort`<sup>Optional</sup> <a name="remotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter.property.remotePort"></a>

```typescript
public readonly remotePort: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#remote_port VirtualMachinePacketCapture#remote_port}.

---

### VirtualMachinePacketCaptureStorageLocation <a name="VirtualMachinePacketCaptureStorageLocation" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

const virtualMachinePacketCaptureStorageLocation: virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.filePath">filePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}. |

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#file_path VirtualMachinePacketCapture#file_path}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#storage_account_id VirtualMachinePacketCapture#storage_account_id}.

---

### VirtualMachinePacketCaptureTimeouts <a name="VirtualMachinePacketCaptureTimeouts" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

const virtualMachinePacketCaptureTimeouts: virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#create VirtualMachinePacketCapture#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#delete VirtualMachinePacketCapture#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/virtual_machine_packet_capture#read VirtualMachinePacketCapture#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachinePacketCaptureFilterList <a name="VirtualMachinePacketCaptureFilterList" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

new virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get"></a>

```typescript
public get(index: number): VirtualMachinePacketCaptureFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachinePacketCaptureFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>[]

---


### VirtualMachinePacketCaptureFilterOutputReference <a name="VirtualMachinePacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

new virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalIpAddress">resetLocalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalPort">resetLocalPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemoteIpAddress">resetRemoteIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemotePort">resetRemotePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalIpAddress` <a name="resetLocalIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```typescript
public resetLocalIpAddress(): void
```

##### `resetLocalPort` <a name="resetLocalPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetLocalPort"></a>

```typescript
public resetLocalPort(): void
```

##### `resetRemoteIpAddress` <a name="resetRemoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```typescript
public resetRemoteIpAddress(): void
```

##### `resetRemotePort` <a name="resetRemotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.resetRemotePort"></a>

```typescript
public resetRemotePort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddressInput">localIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPortInput">localPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddressInput">remoteIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePortInput">remotePortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddress">localIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPort">localPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddress">remoteIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePort">remotePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localIpAddressInput`<sup>Optional</sup> <a name="localIpAddressInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```typescript
public readonly localIpAddressInput: string;
```

- *Type:* string

---

##### `localPortInput`<sup>Optional</sup> <a name="localPortInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPortInput"></a>

```typescript
public readonly localPortInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `remoteIpAddressInput`<sup>Optional</sup> <a name="remoteIpAddressInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```typescript
public readonly remoteIpAddressInput: string;
```

- *Type:* string

---

##### `remotePortInput`<sup>Optional</sup> <a name="remotePortInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePortInput"></a>

```typescript
public readonly remotePortInput: string;
```

- *Type:* string

---

##### `localIpAddress`<sup>Required</sup> <a name="localIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localIpAddress"></a>

```typescript
public readonly localIpAddress: string;
```

- *Type:* string

---

##### `localPort`<sup>Required</sup> <a name="localPort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.localPort"></a>

```typescript
public readonly localPort: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `remoteIpAddress`<sup>Required</sup> <a name="remoteIpAddress" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```typescript
public readonly remoteIpAddress: string;
```

- *Type:* string

---

##### `remotePort`<sup>Required</sup> <a name="remotePort" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.remotePort"></a>

```typescript
public readonly remotePort: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachinePacketCaptureFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureFilter">VirtualMachinePacketCaptureFilter</a>

---


### VirtualMachinePacketCaptureStorageLocationOutputReference <a name="VirtualMachinePacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

new virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilePath` <a name="resetFilePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```typescript
public resetFilePath(): void
```

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```typescript
public resetStorageAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storagePath">storagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storagePath`<sup>Required</sup> <a name="storagePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```typescript
public readonly storagePath: string;
```

- *Type:* string

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachinePacketCaptureStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureStorageLocation">VirtualMachinePacketCaptureStorageLocation</a>

---


### VirtualMachinePacketCaptureTimeoutsOutputReference <a name="VirtualMachinePacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualMachinePacketCapture } from '@cdktf/provider-azurerm'

new virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachinePacketCaptureTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachinePacketCapture.VirtualMachinePacketCaptureTimeouts">VirtualMachinePacketCaptureTimeouts</a>

---



