# `devTestWindowsVirtualMachine` Submodule <a name="`devTestWindowsVirtualMachine` Submodule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestWindowsVirtualMachine <a name="DevTestWindowsVirtualMachine" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine azurerm_dev_test_windows_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

new devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine(scope: Construct, id: string, config: DevTestWindowsVirtualMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig">DevTestWindowsVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig">DevTestWindowsVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference">putGalleryImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule">putInboundNatRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetAllowClaim">resetAllowClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetDisallowPublicIpAddress">resetDisallowPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetInboundNatRule">resetInboundNatRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGalleryImageReference` <a name="putGalleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference"></a>

```typescript
public putGalleryImageReference(value: DevTestWindowsVirtualMachineGalleryImageReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

---

##### `putInboundNatRule` <a name="putInboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule"></a>

```typescript
public putInboundNatRule(value: IResolvable | DevTestWindowsVirtualMachineInboundNatRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts"></a>

```typescript
public putTimeouts(value: DevTestWindowsVirtualMachineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

---

##### `resetAllowClaim` <a name="resetAllowClaim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetAllowClaim"></a>

```typescript
public resetAllowClaim(): void
```

##### `resetDisallowPublicIpAddress` <a name="resetDisallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetDisallowPublicIpAddress"></a>

```typescript
public resetDisallowPublicIpAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInboundNatRule` <a name="resetInboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetInboundNatRule"></a>

```typescript
public resetInboundNatRule(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevTestWindowsVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevTestWindowsVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevTestWindowsVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevTestWindowsVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevTestWindowsVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReference">galleryImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference">DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRule">inboundNatRule</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList">DevTestWindowsVirtualMachineInboundNatRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference">DevTestWindowsVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.uniqueIdentifier">uniqueIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaimInput">allowClaimInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddressInput">disallowPublicIpAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReferenceInput">galleryImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRuleInput">inboundNatRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labNameInput">labNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetNameInput">labSubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkIdInput">labVirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaim">allowClaim</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddress">disallowPublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labName">labName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetName">labSubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkId">labVirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `galleryImageReference`<sup>Required</sup> <a name="galleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReference"></a>

```typescript
public readonly galleryImageReference: DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference">DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference</a>

---

##### `inboundNatRule`<sup>Required</sup> <a name="inboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRule"></a>

```typescript
public readonly inboundNatRule: DevTestWindowsVirtualMachineInboundNatRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList">DevTestWindowsVirtualMachineInboundNatRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeouts"></a>

```typescript
public readonly timeouts: DevTestWindowsVirtualMachineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference">DevTestWindowsVirtualMachineTimeoutsOutputReference</a>

---

##### `uniqueIdentifier`<sup>Required</sup> <a name="uniqueIdentifier" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.uniqueIdentifier"></a>

```typescript
public readonly uniqueIdentifier: string;
```

- *Type:* string

---

##### `allowClaimInput`<sup>Optional</sup> <a name="allowClaimInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaimInput"></a>

```typescript
public readonly allowClaimInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disallowPublicIpAddressInput`<sup>Optional</sup> <a name="disallowPublicIpAddressInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddressInput"></a>

```typescript
public readonly disallowPublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `galleryImageReferenceInput`<sup>Optional</sup> <a name="galleryImageReferenceInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReferenceInput"></a>

```typescript
public readonly galleryImageReferenceInput: DevTestWindowsVirtualMachineGalleryImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inboundNatRuleInput`<sup>Optional</sup> <a name="inboundNatRuleInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRuleInput"></a>

```typescript
public readonly inboundNatRuleInput: IResolvable | DevTestWindowsVirtualMachineInboundNatRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>[]

---

##### `labNameInput`<sup>Optional</sup> <a name="labNameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labNameInput"></a>

```typescript
public readonly labNameInput: string;
```

- *Type:* string

---

##### `labSubnetNameInput`<sup>Optional</sup> <a name="labSubnetNameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetNameInput"></a>

```typescript
public readonly labSubnetNameInput: string;
```

- *Type:* string

---

##### `labVirtualNetworkIdInput`<sup>Optional</sup> <a name="labVirtualNetworkIdInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkIdInput"></a>

```typescript
public readonly labVirtualNetworkIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevTestWindowsVirtualMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `allowClaim`<sup>Required</sup> <a name="allowClaim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaim"></a>

```typescript
public readonly allowClaim: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disallowPublicIpAddress`<sup>Required</sup> <a name="disallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddress"></a>

```typescript
public readonly disallowPublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labName"></a>

```typescript
public readonly labName: string;
```

- *Type:* string

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetName"></a>

```typescript
public readonly labSubnetName: string;
```

- *Type:* string

---

##### `labVirtualNetworkId`<sup>Required</sup> <a name="labVirtualNetworkId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkId"></a>

```typescript
public readonly labVirtualNetworkId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestWindowsVirtualMachineConfig <a name="DevTestWindowsVirtualMachineConfig" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

const devTestWindowsVirtualMachineConfig: devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.galleryImageReference">galleryImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labName">labName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labSubnetName">labSubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labVirtualNetworkId">labVirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.allowClaim">allowClaim</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.disallowPublicIpAddress">disallowPublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.inboundNatRule">inboundNatRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>[]</code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.notes">notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `galleryImageReference`<sup>Required</sup> <a name="galleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.galleryImageReference"></a>

```typescript
public readonly galleryImageReference: DevTestWindowsVirtualMachineGalleryImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#gallery_image_reference DevTestWindowsVirtualMachine#gallery_image_reference}

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labName"></a>

```typescript
public readonly labName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}.

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labSubnetName"></a>

```typescript
public readonly labSubnetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}.

---

##### `labVirtualNetworkId`<sup>Required</sup> <a name="labVirtualNetworkId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labVirtualNetworkId"></a>

```typescript
public readonly labVirtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}.

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}.

---

##### `allowClaim`<sup>Optional</sup> <a name="allowClaim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.allowClaim"></a>

```typescript
public readonly allowClaim: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}.

---

##### `disallowPublicIpAddress`<sup>Optional</sup> <a name="disallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.disallowPublicIpAddress"></a>

```typescript
public readonly disallowPublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundNatRule`<sup>Optional</sup> <a name="inboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.inboundNatRule"></a>

```typescript
public readonly inboundNatRule: IResolvable | DevTestWindowsVirtualMachineInboundNatRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>[]

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#inbound_nat_rule DevTestWindowsVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevTestWindowsVirtualMachineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#timeouts DevTestWindowsVirtualMachine#timeouts}

---

### DevTestWindowsVirtualMachineGalleryImageReference <a name="DevTestWindowsVirtualMachineGalleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

const devTestWindowsVirtualMachineGalleryImageReference: devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.offer">offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#offer DevTestWindowsVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.publisher">publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#publisher DevTestWindowsVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#sku DevTestWindowsVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#version DevTestWindowsVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#offer DevTestWindowsVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#publisher DevTestWindowsVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#sku DevTestWindowsVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#version DevTestWindowsVirtualMachine#version}.

---

### DevTestWindowsVirtualMachineInboundNatRule <a name="DevTestWindowsVirtualMachineInboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

const devTestWindowsVirtualMachineInboundNatRule: devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.backendPort">backendPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#backend_port DevTestWindowsVirtualMachine#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#protocol DevTestWindowsVirtualMachine#protocol}. |

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#backend_port DevTestWindowsVirtualMachine#backend_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#protocol DevTestWindowsVirtualMachine#protocol}.

---

### DevTestWindowsVirtualMachineTimeouts <a name="DevTestWindowsVirtualMachineTimeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

const devTestWindowsVirtualMachineTimeouts: devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#create DevTestWindowsVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#delete DevTestWindowsVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#read DevTestWindowsVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#update DevTestWindowsVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#create DevTestWindowsVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#delete DevTestWindowsVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#read DevTestWindowsVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/dev_test_windows_virtual_machine#update DevTestWindowsVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference <a name="DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

new devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offer">offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offerInput"></a>

```typescript
public readonly offerInput: string;
```

- *Type:* string

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput"></a>

```typescript
public readonly publisherInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offer"></a>

```typescript
public readonly offer: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DevTestWindowsVirtualMachineGalleryImageReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

---


### DevTestWindowsVirtualMachineInboundNatRuleList <a name="DevTestWindowsVirtualMachineInboundNatRuleList" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

new devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get"></a>

```typescript
public get(index: number): DevTestWindowsVirtualMachineInboundNatRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevTestWindowsVirtualMachineInboundNatRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>[]

---


### DevTestWindowsVirtualMachineInboundNatRuleOutputReference <a name="DevTestWindowsVirtualMachineInboundNatRuleOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

new devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.frontendPort">frontendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.frontendPort"></a>

```typescript
public readonly frontendPort: number;
```

- *Type:* number

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPortInput"></a>

```typescript
public readonly backendPortInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevTestWindowsVirtualMachineInboundNatRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>

---


### DevTestWindowsVirtualMachineTimeoutsOutputReference <a name="DevTestWindowsVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer"></a>

```typescript
import { devTestWindowsVirtualMachine } from '@cdktf/provider-azurerm'

new devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevTestWindowsVirtualMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

---



