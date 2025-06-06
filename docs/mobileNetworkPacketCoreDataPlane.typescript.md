# `mobileNetworkPacketCoreDataPlane` Submodule <a name="`mobileNetworkPacketCoreDataPlane` Submodule" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkPacketCoreDataPlane <a name="MobileNetworkPacketCoreDataPlane" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer"></a>

```typescript
import { mobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

new mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane(scope: Construct, id: string, config: MobileNetworkPacketCoreDataPlaneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig">MobileNetworkPacketCoreDataPlaneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig">MobileNetworkPacketCoreDataPlaneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Address">resetUserPlaneAccessIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Gateway">resetUserPlaneAccessIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Subnet">resetUserPlaneAccessIpv4Subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessName">resetUserPlaneAccessName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts"></a>

```typescript
public putTimeouts(value: MobileNetworkPacketCoreDataPlaneTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserPlaneAccessIpv4Address` <a name="resetUserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Address"></a>

```typescript
public resetUserPlaneAccessIpv4Address(): void
```

##### `resetUserPlaneAccessIpv4Gateway` <a name="resetUserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Gateway"></a>

```typescript
public resetUserPlaneAccessIpv4Gateway(): void
```

##### `resetUserPlaneAccessIpv4Subnet` <a name="resetUserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessIpv4Subnet"></a>

```typescript
public resetUserPlaneAccessIpv4Subnet(): void
```

##### `resetUserPlaneAccessName` <a name="resetUserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.resetUserPlaneAccessName"></a>

```typescript
public resetUserPlaneAccessName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct"></a>

```typescript
import { mobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement"></a>

```typescript
import { mobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource"></a>

```typescript
import { mobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport"></a>

```typescript
import { mobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MobileNetworkPacketCoreDataPlane to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MobileNetworkPacketCoreDataPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkPacketCoreDataPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput">mobileNetworkPacketCoreControlPlaneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4AddressInput">userPlaneAccessIpv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4GatewayInput">userPlaneAccessIpv4GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4SubnetInput">userPlaneAccessIpv4SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessNameInput">userPlaneAccessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId">mobileNetworkPacketCoreControlPlaneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessName">userPlaneAccessName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeouts"></a>

```typescript
public readonly timeouts: MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mobileNetworkPacketCoreControlPlaneIdInput`<sup>Optional</sup> <a name="mobileNetworkPacketCoreControlPlaneIdInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput"></a>

```typescript
public readonly mobileNetworkPacketCoreControlPlaneIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MobileNetworkPacketCoreDataPlaneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>

---

##### `userPlaneAccessIpv4AddressInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4AddressInput"></a>

```typescript
public readonly userPlaneAccessIpv4AddressInput: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4GatewayInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4GatewayInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4GatewayInput"></a>

```typescript
public readonly userPlaneAccessIpv4GatewayInput: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4SubnetInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4SubnetInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4SubnetInput"></a>

```typescript
public readonly userPlaneAccessIpv4SubnetInput: string;
```

- *Type:* string

---

##### `userPlaneAccessNameInput`<sup>Optional</sup> <a name="userPlaneAccessNameInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessNameInput"></a>

```typescript
public readonly userPlaneAccessNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mobileNetworkPacketCoreControlPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreControlPlaneId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId"></a>

```typescript
public readonly mobileNetworkPacketCoreControlPlaneId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userPlaneAccessIpv4Address`<sup>Required</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address"></a>

```typescript
public readonly userPlaneAccessIpv4Address: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway"></a>

```typescript
public readonly userPlaneAccessIpv4Gateway: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet"></a>

```typescript
public readonly userPlaneAccessIpv4Subnet: string;
```

- *Type:* string

---

##### `userPlaneAccessName`<sup>Required</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.userPlaneAccessName"></a>

```typescript
public readonly userPlaneAccessName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlane.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkPacketCoreDataPlaneConfig <a name="MobileNetworkPacketCoreDataPlaneConfig" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.Initializer"></a>

```typescript
import { mobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

const mobileNetworkPacketCoreDataPlaneConfig: mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId">mobileNetworkPacketCoreControlPlaneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessName">userPlaneAccessName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#location MobileNetworkPacketCoreDataPlane#location}.

---

##### `mobileNetworkPacketCoreControlPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreControlPlaneId" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId"></a>

```typescript
public readonly mobileNetworkPacketCoreControlPlaneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id MobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#name MobileNetworkPacketCoreDataPlane#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#id MobileNetworkPacketCoreDataPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#tags MobileNetworkPacketCoreDataPlane#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MobileNetworkPacketCoreDataPlaneTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#timeouts MobileNetworkPacketCoreDataPlane#timeouts}

---

##### `userPlaneAccessIpv4Address`<sup>Optional</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Address"></a>

```typescript
public readonly userPlaneAccessIpv4Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_address MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_address}.

---

##### `userPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Gateway"></a>

```typescript
public readonly userPlaneAccessIpv4Gateway: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_gateway MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_gateway}.

---

##### `userPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessIpv4Subnet"></a>

```typescript
public readonly userPlaneAccessIpv4Subnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_ipv4_subnet MobileNetworkPacketCoreDataPlane#user_plane_access_ipv4_subnet}.

---

##### `userPlaneAccessName`<sup>Optional</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneConfig.property.userPlaneAccessName"></a>

```typescript
public readonly userPlaneAccessName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#user_plane_access_name MobileNetworkPacketCoreDataPlane#user_plane_access_name}.

---

### MobileNetworkPacketCoreDataPlaneTimeouts <a name="MobileNetworkPacketCoreDataPlaneTimeouts" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.Initializer"></a>

```typescript
import { mobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

const mobileNetworkPacketCoreDataPlaneTimeouts: mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#create MobileNetworkPacketCoreDataPlane#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#delete MobileNetworkPacketCoreDataPlane#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#read MobileNetworkPacketCoreDataPlane#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#update MobileNetworkPacketCoreDataPlane#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#create MobileNetworkPacketCoreDataPlane#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#delete MobileNetworkPacketCoreDataPlane#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#read MobileNetworkPacketCoreDataPlane#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/mobile_network_packet_core_data_plane#update MobileNetworkPacketCoreDataPlane#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference <a name="MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer"></a>

```typescript
import { mobileNetworkPacketCoreDataPlane } from '@cdktf/provider-azurerm'

new mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MobileNetworkPacketCoreDataPlaneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkPacketCoreDataPlane.MobileNetworkPacketCoreDataPlaneTimeouts">MobileNetworkPacketCoreDataPlaneTimeouts</a>

---



