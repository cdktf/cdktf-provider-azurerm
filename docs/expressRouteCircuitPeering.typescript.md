# `expressRouteCircuitPeering` Submodule <a name="`expressRouteCircuitPeering` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuitPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuitPeering <a name="ExpressRouteCircuitPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering azurerm_express_route_circuit_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

new expressRouteCircuitPeering.ExpressRouteCircuitPeering(scope: Construct, id: string, config: ExpressRouteCircuitPeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig">ExpressRouteCircuitPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig">ExpressRouteCircuitPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig">putMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled">resetIpv4Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig">resetMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn">resetPeerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix">resetPrimaryPeerAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId">resetRouteFilterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix">resetSecondaryPeerAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey">resetSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6"></a>

```typescript
public putIpv6(value: ExpressRouteCircuitPeeringIpv6): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `putMicrosoftPeeringConfig` <a name="putMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig"></a>

```typescript
public putMicrosoftPeeringConfig(value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts"></a>

```typescript
public putTimeouts(value: ExpressRouteCircuitPeeringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv4Enabled` <a name="resetIpv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled"></a>

```typescript
public resetIpv4Enabled(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6"></a>

```typescript
public resetIpv6(): void
```

##### `resetMicrosoftPeeringConfig` <a name="resetMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig"></a>

```typescript
public resetMicrosoftPeeringConfig(): void
```

##### `resetPeerAsn` <a name="resetPeerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn"></a>

```typescript
public resetPeerAsn(): void
```

##### `resetPrimaryPeerAddressPrefix` <a name="resetPrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix"></a>

```typescript
public resetPrimaryPeerAddressPrefix(): void
```

##### `resetRouteFilterId` <a name="resetRouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId"></a>

```typescript
public resetRouteFilterId(): void
```

##### `resetSecondaryPeerAddressPrefix` <a name="resetSecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix"></a>

```typescript
public resetSecondaryPeerAddressPrefix(): void
```

##### `resetSharedKey` <a name="resetSharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey"></a>

```typescript
public resetSharedKey(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExpressRouteCircuitPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExpressRouteCircuitPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteCircuitPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn">azureAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag">gatewayManagerEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig">microsoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort">primaryAzurePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort">secondaryAzurePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput">expressRouteCircuitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput">ipv4EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input">ipv6Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput">microsoftPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput">peerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput">peeringTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput">primaryPeerAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput">routeFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput">secondaryPeerAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput">sharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName">expressRouteCircuitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled">ipv4Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType">peeringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId">routeFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey">sharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureAsn`<sup>Required</sup> <a name="azureAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn"></a>

```typescript
public readonly azureAsn: number;
```

- *Type:* number

---

##### `gatewayManagerEtag`<sup>Required</sup> <a name="gatewayManagerEtag" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag"></a>

```typescript
public readonly gatewayManagerEtag: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6"></a>

```typescript
public readonly ipv6: ExpressRouteCircuitPeeringIpv6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a>

---

##### `microsoftPeeringConfig`<sup>Required</sup> <a name="microsoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig"></a>

```typescript
public readonly microsoftPeeringConfig: ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a>

---

##### `primaryAzurePort`<sup>Required</sup> <a name="primaryAzurePort" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort"></a>

```typescript
public readonly primaryAzurePort: string;
```

- *Type:* string

---

##### `secondaryAzurePort`<sup>Required</sup> <a name="secondaryAzurePort" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort"></a>

```typescript
public readonly secondaryAzurePort: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts"></a>

```typescript
public readonly timeouts: ExpressRouteCircuitPeeringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a>

---

##### `expressRouteCircuitNameInput`<sup>Optional</sup> <a name="expressRouteCircuitNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput"></a>

```typescript
public readonly expressRouteCircuitNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv4EnabledInput`<sup>Optional</sup> <a name="ipv4EnabledInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput"></a>

```typescript
public readonly ipv4EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: ExpressRouteCircuitPeeringIpv6;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `microsoftPeeringConfigInput`<sup>Optional</sup> <a name="microsoftPeeringConfigInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput"></a>

```typescript
public readonly microsoftPeeringConfigInput: ExpressRouteCircuitPeeringMicrosoftPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput"></a>

```typescript
public readonly peerAsnInput: number;
```

- *Type:* number

---

##### `peeringTypeInput`<sup>Optional</sup> <a name="peeringTypeInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput"></a>

```typescript
public readonly peeringTypeInput: string;
```

- *Type:* string

---

##### `primaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="primaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput"></a>

```typescript
public readonly primaryPeerAddressPrefixInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `routeFilterIdInput`<sup>Optional</sup> <a name="routeFilterIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput"></a>

```typescript
public readonly routeFilterIdInput: string;
```

- *Type:* string

---

##### `secondaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="secondaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput"></a>

```typescript
public readonly secondaryPeerAddressPrefixInput: string;
```

- *Type:* string

---

##### `sharedKeyInput`<sup>Optional</sup> <a name="sharedKeyInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput"></a>

```typescript
public readonly sharedKeyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ExpressRouteCircuitPeeringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `expressRouteCircuitName`<sup>Required</sup> <a name="expressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName"></a>

```typescript
public readonly expressRouteCircuitName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv4Enabled`<sup>Required</sup> <a name="ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled"></a>

```typescript
public readonly ipv4Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType"></a>

```typescript
public readonly peeringType: string;
```

- *Type:* string

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix"></a>

```typescript
public readonly primaryPeerAddressPrefix: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `routeFilterId`<sup>Required</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId"></a>

```typescript
public readonly routeFilterId: string;
```

- *Type:* string

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix"></a>

```typescript
public readonly secondaryPeerAddressPrefix: string;
```

- *Type:* string

---

##### `sharedKey`<sup>Required</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey"></a>

```typescript
public readonly sharedKey: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitPeeringConfig <a name="ExpressRouteCircuitPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

const expressRouteCircuitPeeringConfig: expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName">expressRouteCircuitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType">peeringType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId">vlanId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled">ipv4Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig">microsoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | microsoft_peering_config block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn">peerAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId">routeFilterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey">sharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expressRouteCircuitName`<sup>Required</sup> <a name="expressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName"></a>

```typescript
public readonly expressRouteCircuitName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType"></a>

```typescript
public readonly peeringType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}.

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4Enabled`<sup>Optional</sup> <a name="ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled"></a>

```typescript
public readonly ipv4Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6"></a>

```typescript
public readonly ipv6: ExpressRouteCircuitPeeringIpv6;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}

---

##### `microsoftPeeringConfig`<sup>Optional</sup> <a name="microsoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig"></a>

```typescript
public readonly microsoftPeeringConfig: ExpressRouteCircuitPeeringMicrosoftPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

microsoft_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}

---

##### `peerAsn`<sup>Optional</sup> <a name="peerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}.

---

##### `primaryPeerAddressPrefix`<sup>Optional</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix"></a>

```typescript
public readonly primaryPeerAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `routeFilterId`<sup>Optional</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId"></a>

```typescript
public readonly routeFilterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

##### `secondaryPeerAddressPrefix`<sup>Optional</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix"></a>

```typescript
public readonly secondaryPeerAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `sharedKey`<sup>Optional</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey"></a>

```typescript
public readonly sharedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ExpressRouteCircuitPeeringTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}

---

### ExpressRouteCircuitPeeringIpv6 <a name="ExpressRouteCircuitPeeringIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

const expressRouteCircuitPeeringIpv6: expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering">microsoftPeering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | microsoft_peering block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId">routeFilterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix"></a>

```typescript
public readonly primaryPeerAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix"></a>

```typescript
public readonly secondaryPeerAddressPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}.

---

##### `microsoftPeering`<sup>Optional</sup> <a name="microsoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering"></a>

```typescript
public readonly microsoftPeering: ExpressRouteCircuitPeeringIpv6MicrosoftPeering;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

microsoft_peering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}

---

##### `routeFilterId`<sup>Optional</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId"></a>

```typescript
public readonly routeFilterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

### ExpressRouteCircuitPeeringIpv6MicrosoftPeering <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

const expressRouteCircuitPeeringIpv6MicrosoftPeering: expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities">advertisedCommunities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn">customerAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName">routingRegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `advertisedCommunities`<sup>Optional</sup> <a name="advertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities"></a>

```typescript
public readonly advertisedCommunities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `advertisedPublicPrefixes`<sup>Optional</sup> <a name="advertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes"></a>

```typescript
public readonly advertisedPublicPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `customerAsn`<sup>Optional</sup> <a name="customerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `routingRegistryName`<sup>Optional</sup> <a name="routingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName"></a>

```typescript
public readonly routingRegistryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringMicrosoftPeeringConfig <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

const expressRouteCircuitPeeringMicrosoftPeeringConfig: expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities">advertisedCommunities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn">customerAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName">routingRegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `advertisedPublicPrefixes`<sup>Required</sup> <a name="advertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes"></a>

```typescript
public readonly advertisedPublicPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `advertisedCommunities`<sup>Optional</sup> <a name="advertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities"></a>

```typescript
public readonly advertisedCommunities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `customerAsn`<sup>Optional</sup> <a name="customerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `routingRegistryName`<sup>Optional</sup> <a name="routingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName"></a>

```typescript
public readonly routingRegistryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringTimeouts <a name="ExpressRouteCircuitPeeringTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

const expressRouteCircuitPeeringTimeouts: expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

new expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities">resetAdvertisedCommunities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes">resetAdvertisedPublicPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn">resetCustomerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName">resetRoutingRegistryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvertisedCommunities` <a name="resetAdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities"></a>

```typescript
public resetAdvertisedCommunities(): void
```

##### `resetAdvertisedPublicPrefixes` <a name="resetAdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes"></a>

```typescript
public resetAdvertisedPublicPrefixes(): void
```

##### `resetCustomerAsn` <a name="resetCustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn"></a>

```typescript
public resetCustomerAsn(): void
```

##### `resetRoutingRegistryName` <a name="resetRoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName"></a>

```typescript
public resetRoutingRegistryName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput">advertisedCommunitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput">advertisedPublicPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput">customerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput">routingRegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities">advertisedCommunities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn">customerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName">routingRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advertisedCommunitiesInput`<sup>Optional</sup> <a name="advertisedCommunitiesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput"></a>

```typescript
public readonly advertisedCommunitiesInput: string[];
```

- *Type:* string[]

---

##### `advertisedPublicPrefixesInput`<sup>Optional</sup> <a name="advertisedPublicPrefixesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput"></a>

```typescript
public readonly advertisedPublicPrefixesInput: string[];
```

- *Type:* string[]

---

##### `customerAsnInput`<sup>Optional</sup> <a name="customerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput"></a>

```typescript
public readonly customerAsnInput: number;
```

- *Type:* number

---

##### `routingRegistryNameInput`<sup>Optional</sup> <a name="routingRegistryNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput"></a>

```typescript
public readonly routingRegistryNameInput: string;
```

- *Type:* string

---

##### `advertisedCommunities`<sup>Required</sup> <a name="advertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities"></a>

```typescript
public readonly advertisedCommunities: string[];
```

- *Type:* string[]

---

##### `advertisedPublicPrefixes`<sup>Required</sup> <a name="advertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes"></a>

```typescript
public readonly advertisedPublicPrefixes: string[];
```

- *Type:* string[]

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

---

##### `routingRegistryName`<sup>Required</sup> <a name="routingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName"></a>

```typescript
public readonly routingRegistryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExpressRouteCircuitPeeringIpv6MicrosoftPeering;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---


### ExpressRouteCircuitPeeringIpv6OutputReference <a name="ExpressRouteCircuitPeeringIpv6OutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

new expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering">putMicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering">resetMicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId">resetRouteFilterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMicrosoftPeering` <a name="putMicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering"></a>

```typescript
public putMicrosoftPeering(value: ExpressRouteCircuitPeeringIpv6MicrosoftPeering): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMicrosoftPeering` <a name="resetMicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering"></a>

```typescript
public resetMicrosoftPeering(): void
```

##### `resetRouteFilterId` <a name="resetRouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId"></a>

```typescript
public resetRouteFilterId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering">microsoftPeering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput">microsoftPeeringInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput">primaryPeerAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput">routeFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput">secondaryPeerAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId">routeFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `microsoftPeering`<sup>Required</sup> <a name="microsoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering"></a>

```typescript
public readonly microsoftPeering: ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `microsoftPeeringInput`<sup>Optional</sup> <a name="microsoftPeeringInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput"></a>

```typescript
public readonly microsoftPeeringInput: ExpressRouteCircuitPeeringIpv6MicrosoftPeering;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `primaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="primaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput"></a>

```typescript
public readonly primaryPeerAddressPrefixInput: string;
```

- *Type:* string

---

##### `routeFilterIdInput`<sup>Optional</sup> <a name="routeFilterIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput"></a>

```typescript
public readonly routeFilterIdInput: string;
```

- *Type:* string

---

##### `secondaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="secondaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput"></a>

```typescript
public readonly secondaryPeerAddressPrefixInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix"></a>

```typescript
public readonly primaryPeerAddressPrefix: string;
```

- *Type:* string

---

##### `routeFilterId`<sup>Required</sup> <a name="routeFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId"></a>

```typescript
public readonly routeFilterId: string;
```

- *Type:* string

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix"></a>

```typescript
public readonly secondaryPeerAddressPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExpressRouteCircuitPeeringIpv6;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---


### ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

new expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities">resetAdvertisedCommunities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn">resetCustomerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName">resetRoutingRegistryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvertisedCommunities` <a name="resetAdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities"></a>

```typescript
public resetAdvertisedCommunities(): void
```

##### `resetCustomerAsn` <a name="resetCustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn"></a>

```typescript
public resetCustomerAsn(): void
```

##### `resetRoutingRegistryName` <a name="resetRoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName"></a>

```typescript
public resetRoutingRegistryName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput">advertisedCommunitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput">advertisedPublicPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput">customerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput">routingRegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities">advertisedCommunities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes">advertisedPublicPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn">customerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName">routingRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advertisedCommunitiesInput`<sup>Optional</sup> <a name="advertisedCommunitiesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput"></a>

```typescript
public readonly advertisedCommunitiesInput: string[];
```

- *Type:* string[]

---

##### `advertisedPublicPrefixesInput`<sup>Optional</sup> <a name="advertisedPublicPrefixesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput"></a>

```typescript
public readonly advertisedPublicPrefixesInput: string[];
```

- *Type:* string[]

---

##### `customerAsnInput`<sup>Optional</sup> <a name="customerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput"></a>

```typescript
public readonly customerAsnInput: number;
```

- *Type:* number

---

##### `routingRegistryNameInput`<sup>Optional</sup> <a name="routingRegistryNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput"></a>

```typescript
public readonly routingRegistryNameInput: string;
```

- *Type:* string

---

##### `advertisedCommunities`<sup>Required</sup> <a name="advertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities"></a>

```typescript
public readonly advertisedCommunities: string[];
```

- *Type:* string[]

---

##### `advertisedPublicPrefixes`<sup>Required</sup> <a name="advertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes"></a>

```typescript
public readonly advertisedPublicPrefixes: string[];
```

- *Type:* string[]

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn"></a>

```typescript
public readonly customerAsn: number;
```

- *Type:* number

---

##### `routingRegistryName`<sup>Required</sup> <a name="routingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName"></a>

```typescript
public readonly routingRegistryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExpressRouteCircuitPeeringMicrosoftPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---


### ExpressRouteCircuitPeeringTimeoutsOutputReference <a name="ExpressRouteCircuitPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer"></a>

```typescript
import { expressRouteCircuitPeering } from '@cdktf/provider-azurerm'

new expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExpressRouteCircuitPeeringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

---



