# `mobileNetworkAttachedDataNetwork` Submodule <a name="`mobileNetworkAttachedDataNetwork` Submodule" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkAttachedDataNetwork <a name="MobileNetworkAttachedDataNetwork" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork(scope: Construct, id: string, config: MobileNetworkAttachedDataNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig">MobileNetworkAttachedDataNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig">MobileNetworkAttachedDataNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation">putNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetNetworkAddressPortTranslation">resetNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentAddressPoolPrefixes">resetUserEquipmentAddressPoolPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentStaticAddressPoolPrefixes">resetUserEquipmentStaticAddressPoolPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Address">resetUserPlaneAccessIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Gateway">resetUserPlaneAccessIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Subnet">resetUserPlaneAccessIpv4Subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessName">resetUserPlaneAccessName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkAddressPortTranslation` <a name="putNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation"></a>

```typescript
public putNetworkAddressPortTranslation(value: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: MobileNetworkAttachedDataNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkAddressPortTranslation` <a name="resetNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetNetworkAddressPortTranslation"></a>

```typescript
public resetNetworkAddressPortTranslation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserEquipmentAddressPoolPrefixes` <a name="resetUserEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentAddressPoolPrefixes"></a>

```typescript
public resetUserEquipmentAddressPoolPrefixes(): void
```

##### `resetUserEquipmentStaticAddressPoolPrefixes` <a name="resetUserEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentStaticAddressPoolPrefixes"></a>

```typescript
public resetUserEquipmentStaticAddressPoolPrefixes(): void
```

##### `resetUserPlaneAccessIpv4Address` <a name="resetUserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Address"></a>

```typescript
public resetUserPlaneAccessIpv4Address(): void
```

##### `resetUserPlaneAccessIpv4Gateway` <a name="resetUserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Gateway"></a>

```typescript
public resetUserPlaneAccessIpv4Gateway(): void
```

##### `resetUserPlaneAccessIpv4Subnet` <a name="resetUserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Subnet"></a>

```typescript
public resetUserPlaneAccessIpv4Subnet(): void
```

##### `resetUserPlaneAccessName` <a name="resetUserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessName"></a>

```typescript
public resetUserPlaneAccessName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkAttachedDataNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.generateConfigForImport"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MobileNetworkAttachedDataNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MobileNetworkAttachedDataNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MobileNetworkAttachedDataNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkAttachedDataNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation">networkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference">MobileNetworkAttachedDataNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddressesInput">dnsAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput">mobileNetworkDataNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput">mobileNetworkPacketCoreDataPlaneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslationInput">networkAddressPortTranslationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixesInput">userEquipmentAddressPoolPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixesInput">userEquipmentStaticAddressPoolPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4AddressInput">userPlaneAccessIpv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4GatewayInput">userPlaneAccessIpv4GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4SubnetInput">userPlaneAccessIpv4SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessNameInput">userPlaneAccessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddresses">dnsAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName">mobileNetworkDataNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId">mobileNetworkPacketCoreDataPlaneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes">userEquipmentAddressPoolPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes">userEquipmentStaticAddressPoolPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessName">userPlaneAccessName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkAddressPortTranslation`<sup>Required</sup> <a name="networkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation"></a>

```typescript
public readonly networkAddressPortTranslation: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: MobileNetworkAttachedDataNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference">MobileNetworkAttachedDataNetworkTimeoutsOutputReference</a>

---

##### `dnsAddressesInput`<sup>Optional</sup> <a name="dnsAddressesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddressesInput"></a>

```typescript
public readonly dnsAddressesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mobileNetworkDataNetworkNameInput`<sup>Optional</sup> <a name="mobileNetworkDataNetworkNameInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput"></a>

```typescript
public readonly mobileNetworkDataNetworkNameInput: string;
```

- *Type:* string

---

##### `mobileNetworkPacketCoreDataPlaneIdInput`<sup>Optional</sup> <a name="mobileNetworkPacketCoreDataPlaneIdInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput"></a>

```typescript
public readonly mobileNetworkPacketCoreDataPlaneIdInput: string;
```

- *Type:* string

---

##### `networkAddressPortTranslationInput`<sup>Optional</sup> <a name="networkAddressPortTranslationInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslationInput"></a>

```typescript
public readonly networkAddressPortTranslationInput: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MobileNetworkAttachedDataNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `userEquipmentAddressPoolPrefixesInput`<sup>Optional</sup> <a name="userEquipmentAddressPoolPrefixesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixesInput"></a>

```typescript
public readonly userEquipmentAddressPoolPrefixesInput: string[];
```

- *Type:* string[]

---

##### `userEquipmentStaticAddressPoolPrefixesInput`<sup>Optional</sup> <a name="userEquipmentStaticAddressPoolPrefixesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixesInput"></a>

```typescript
public readonly userEquipmentStaticAddressPoolPrefixesInput: string[];
```

- *Type:* string[]

---

##### `userPlaneAccessIpv4AddressInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4AddressInput"></a>

```typescript
public readonly userPlaneAccessIpv4AddressInput: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4GatewayInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4GatewayInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4GatewayInput"></a>

```typescript
public readonly userPlaneAccessIpv4GatewayInput: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4SubnetInput`<sup>Optional</sup> <a name="userPlaneAccessIpv4SubnetInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4SubnetInput"></a>

```typescript
public readonly userPlaneAccessIpv4SubnetInput: string;
```

- *Type:* string

---

##### `userPlaneAccessNameInput`<sup>Optional</sup> <a name="userPlaneAccessNameInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessNameInput"></a>

```typescript
public readonly userPlaneAccessNameInput: string;
```

- *Type:* string

---

##### `dnsAddresses`<sup>Required</sup> <a name="dnsAddresses" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddresses"></a>

```typescript
public readonly dnsAddresses: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mobileNetworkDataNetworkName`<sup>Required</sup> <a name="mobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName"></a>

```typescript
public readonly mobileNetworkDataNetworkName: string;
```

- *Type:* string

---

##### `mobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId"></a>

```typescript
public readonly mobileNetworkPacketCoreDataPlaneId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userEquipmentAddressPoolPrefixes`<sup>Required</sup> <a name="userEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes"></a>

```typescript
public readonly userEquipmentAddressPoolPrefixes: string[];
```

- *Type:* string[]

---

##### `userEquipmentStaticAddressPoolPrefixes`<sup>Required</sup> <a name="userEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes"></a>

```typescript
public readonly userEquipmentStaticAddressPoolPrefixes: string[];
```

- *Type:* string[]

---

##### `userPlaneAccessIpv4Address`<sup>Required</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address"></a>

```typescript
public readonly userPlaneAccessIpv4Address: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway"></a>

```typescript
public readonly userPlaneAccessIpv4Gateway: string;
```

- *Type:* string

---

##### `userPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet"></a>

```typescript
public readonly userPlaneAccessIpv4Subnet: string;
```

- *Type:* string

---

##### `userPlaneAccessName`<sup>Required</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessName"></a>

```typescript
public readonly userPlaneAccessName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkAttachedDataNetworkConfig <a name="MobileNetworkAttachedDataNetworkConfig" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.Initializer"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

const mobileNetworkAttachedDataNetworkConfig: mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dnsAddresses">dnsAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName">mobileNetworkDataNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId">mobileNetworkPacketCoreDataPlaneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.networkAddressPortTranslation">networkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | network_address_port_translation block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentAddressPoolPrefixes">userEquipmentAddressPoolPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentStaticAddressPoolPrefixes">userEquipmentStaticAddressPoolPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Address">userPlaneAccessIpv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Gateway">userPlaneAccessIpv4Gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Subnet">userPlaneAccessIpv4Subnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessName">userPlaneAccessName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnsAddresses`<sup>Required</sup> <a name="dnsAddresses" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dnsAddresses"></a>

```typescript
public readonly dnsAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}.

---

##### `mobileNetworkDataNetworkName`<sup>Required</sup> <a name="mobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName"></a>

```typescript
public readonly mobileNetworkDataNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}.

---

##### `mobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="mobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId"></a>

```typescript
public readonly mobileNetworkPacketCoreDataPlaneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkAddressPortTranslation`<sup>Optional</sup> <a name="networkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.networkAddressPortTranslation"></a>

```typescript
public readonly networkAddressPortTranslation: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

network_address_port_translation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#network_address_port_translation MobileNetworkAttachedDataNetwork#network_address_port_translation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MobileNetworkAttachedDataNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#timeouts MobileNetworkAttachedDataNetwork#timeouts}

---

##### `userEquipmentAddressPoolPrefixes`<sup>Optional</sup> <a name="userEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentAddressPoolPrefixes"></a>

```typescript
public readonly userEquipmentAddressPoolPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}.

---

##### `userEquipmentStaticAddressPoolPrefixes`<sup>Optional</sup> <a name="userEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentStaticAddressPoolPrefixes"></a>

```typescript
public readonly userEquipmentStaticAddressPoolPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}.

---

##### `userPlaneAccessIpv4Address`<sup>Optional</sup> <a name="userPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Address"></a>

```typescript
public readonly userPlaneAccessIpv4Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}.

---

##### `userPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="userPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Gateway"></a>

```typescript
public readonly userPlaneAccessIpv4Gateway: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}.

---

##### `userPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="userPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Subnet"></a>

```typescript
public readonly userPlaneAccessIpv4Subnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}.

---

##### `userPlaneAccessName`<sup>Optional</sup> <a name="userPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessName"></a>

```typescript
public readonly userPlaneAccessName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}.

---

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.Initializer"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

const mobileNetworkAttachedDataNetworkNetworkAddressPortTranslation: mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.icmpPinholeTimeoutInSeconds">icmpPinholeTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#icmp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#icmp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.pinholeMaximumNumber">pinholeMaximumNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#pinhole_maximum_number MobileNetworkAttachedDataNetwork#pinhole_maximum_number}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.portRange">portRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | port_range block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPinholeTimeoutInSeconds">tcpPinholeTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#tcp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#tcp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPortReuseMinimumHoldTimeInSeconds">tcpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#tcp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#tcp_port_reuse_minimum_hold_time_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPinholeTimeoutInSeconds">udpPinholeTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#udp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#udp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPortReuseMinimumHoldTimeInSeconds">udpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#udp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#udp_port_reuse_minimum_hold_time_in_seconds}. |

---

##### `icmpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="icmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.icmpPinholeTimeoutInSeconds"></a>

```typescript
public readonly icmpPinholeTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#icmp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#icmp_pinhole_timeout_in_seconds}.

---

##### `pinholeMaximumNumber`<sup>Optional</sup> <a name="pinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.pinholeMaximumNumber"></a>

```typescript
public readonly pinholeMaximumNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#pinhole_maximum_number MobileNetworkAttachedDataNetwork#pinhole_maximum_number}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.portRange"></a>

```typescript
public readonly portRange: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#port_range MobileNetworkAttachedDataNetwork#port_range}

---

##### `tcpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="tcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPinholeTimeoutInSeconds"></a>

```typescript
public readonly tcpPinholeTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#tcp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#tcp_pinhole_timeout_in_seconds}.

---

##### `tcpPortReuseMinimumHoldTimeInSeconds`<sup>Optional</sup> <a name="tcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```typescript
public readonly tcpPortReuseMinimumHoldTimeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#tcp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#tcp_port_reuse_minimum_hold_time_in_seconds}.

---

##### `udpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="udpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPinholeTimeoutInSeconds"></a>

```typescript
public readonly udpPinholeTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#udp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#udp_pinhole_timeout_in_seconds}.

---

##### `udpPortReuseMinimumHoldTimeInSeconds`<sup>Optional</sup> <a name="udpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```typescript
public readonly udpPortReuseMinimumHoldTimeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#udp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#udp_port_reuse_minimum_hold_time_in_seconds}.

---

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.Initializer"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

const mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange: mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.maximum">maximum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#maximum MobileNetworkAttachedDataNetwork#maximum}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.minimum">minimum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#minimum MobileNetworkAttachedDataNetwork#minimum}. |

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#maximum MobileNetworkAttachedDataNetwork#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#minimum MobileNetworkAttachedDataNetwork#minimum}.

---

### MobileNetworkAttachedDataNetworkTimeouts <a name="MobileNetworkAttachedDataNetworkTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.Initializer"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

const mobileNetworkAttachedDataNetworkTimeouts: mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#create MobileNetworkAttachedDataNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#delete MobileNetworkAttachedDataNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#read MobileNetworkAttachedDataNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#update MobileNetworkAttachedDataNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#create MobileNetworkAttachedDataNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#delete MobileNetworkAttachedDataNetwork#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#read MobileNetworkAttachedDataNetwork#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_attached_data_network#update MobileNetworkAttachedDataNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange">putPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetIcmpPinholeTimeoutInSeconds">resetIcmpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPinholeMaximumNumber">resetPinholeMaximumNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPinholeTimeoutInSeconds">resetTcpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPortReuseMinimumHoldTimeInSeconds">resetTcpPortReuseMinimumHoldTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPinholeTimeoutInSeconds">resetUdpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPortReuseMinimumHoldTimeInSeconds">resetUdpPortReuseMinimumHoldTimeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortRange` <a name="putPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange"></a>

```typescript
public putPortRange(value: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---

##### `resetIcmpPinholeTimeoutInSeconds` <a name="resetIcmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetIcmpPinholeTimeoutInSeconds"></a>

```typescript
public resetIcmpPinholeTimeoutInSeconds(): void
```

##### `resetPinholeMaximumNumber` <a name="resetPinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPinholeMaximumNumber"></a>

```typescript
public resetPinholeMaximumNumber(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```

##### `resetTcpPinholeTimeoutInSeconds` <a name="resetTcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPinholeTimeoutInSeconds"></a>

```typescript
public resetTcpPinholeTimeoutInSeconds(): void
```

##### `resetTcpPortReuseMinimumHoldTimeInSeconds` <a name="resetTcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPortReuseMinimumHoldTimeInSeconds"></a>

```typescript
public resetTcpPortReuseMinimumHoldTimeInSeconds(): void
```

##### `resetUdpPinholeTimeoutInSeconds` <a name="resetUdpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPinholeTimeoutInSeconds"></a>

```typescript
public resetUdpPinholeTimeoutInSeconds(): void
```

##### `resetUdpPortReuseMinimumHoldTimeInSeconds` <a name="resetUdpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPortReuseMinimumHoldTimeInSeconds"></a>

```typescript
public resetUdpPortReuseMinimumHoldTimeInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange">portRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSecondsInput">icmpPinholeTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumberInput">pinholeMaximumNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRangeInput">portRangeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSecondsInput">tcpPinholeTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSecondsInput">tcpPortReuseMinimumHoldTimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSecondsInput">udpPinholeTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSecondsInput">udpPortReuseMinimumHoldTimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds">icmpPinholeTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber">pinholeMaximumNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds">tcpPinholeTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds">tcpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds">udpPinholeTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds">udpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange"></a>

```typescript
public readonly portRange: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference</a>

---

##### `icmpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="icmpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSecondsInput"></a>

```typescript
public readonly icmpPinholeTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `pinholeMaximumNumberInput`<sup>Optional</sup> <a name="pinholeMaximumNumberInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumberInput"></a>

```typescript
public readonly pinholeMaximumNumberInput: number;
```

- *Type:* number

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---

##### `tcpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="tcpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSecondsInput"></a>

```typescript
public readonly tcpPinholeTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `tcpPortReuseMinimumHoldTimeInSecondsInput`<sup>Optional</sup> <a name="tcpPortReuseMinimumHoldTimeInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSecondsInput"></a>

```typescript
public readonly tcpPortReuseMinimumHoldTimeInSecondsInput: number;
```

- *Type:* number

---

##### `udpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="udpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSecondsInput"></a>

```typescript
public readonly udpPinholeTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `udpPortReuseMinimumHoldTimeInSecondsInput`<sup>Optional</sup> <a name="udpPortReuseMinimumHoldTimeInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSecondsInput"></a>

```typescript
public readonly udpPortReuseMinimumHoldTimeInSecondsInput: number;
```

- *Type:* number

---

##### `icmpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="icmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds"></a>

```typescript
public readonly icmpPinholeTimeoutInSeconds: number;
```

- *Type:* number

---

##### `pinholeMaximumNumber`<sup>Required</sup> <a name="pinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber"></a>

```typescript
public readonly pinholeMaximumNumber: number;
```

- *Type:* number

---

##### `tcpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="tcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds"></a>

```typescript
public readonly tcpPinholeTimeoutInSeconds: number;
```

- *Type:* number

---

##### `tcpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="tcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```typescript
public readonly tcpPortReuseMinimumHoldTimeInSeconds: number;
```

- *Type:* number

---

##### `udpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="udpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds"></a>

```typescript
public readonly udpPinholeTimeoutInSeconds: number;
```

- *Type:* number

---

##### `udpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="udpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```typescript
public readonly udpPortReuseMinimumHoldTimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---


### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---


### MobileNetworkAttachedDataNetworkTimeoutsOutputReference <a name="MobileNetworkAttachedDataNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { mobileNetworkAttachedDataNetwork } from '@cdktf/provider-azurerm'

new mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MobileNetworkAttachedDataNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

---



