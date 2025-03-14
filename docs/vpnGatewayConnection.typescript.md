# `vpnGatewayConnection` Submodule <a name="`vpnGatewayConnection` Submodule" id="@cdktf/provider-azurerm.vpnGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayConnection <a name="VpnGatewayConnection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection azurerm_vpn_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnection(scope: Construct, id: string, config: VpnGatewayConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig">VpnGatewayConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig">VpnGatewayConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy">putTrafficSelectorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink">putVpnLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetInternetSecurityEnabled">resetInternetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetRouting">resetRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTrafficSelectorPolicy">resetTrafficSelectorPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRouting` <a name="putRouting" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting"></a>

```typescript
public putRouting(value: VpnGatewayConnectionRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnGatewayConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>

---

##### `putTrafficSelectorPolicy` <a name="putTrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy"></a>

```typescript
public putTrafficSelectorPolicy(value: IResolvable | VpnGatewayConnectionTrafficSelectorPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putTrafficSelectorPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>[]

---

##### `putVpnLink` <a name="putVpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink"></a>

```typescript
public putVpnLink(value: IResolvable | VpnGatewayConnectionVpnLink[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.putVpnLink.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternetSecurityEnabled` <a name="resetInternetSecurityEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetInternetSecurityEnabled"></a>

```typescript
public resetInternetSecurityEnabled(): void
```

##### `resetRouting` <a name="resetRouting" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetRouting"></a>

```typescript
public resetRouting(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficSelectorPolicy` <a name="resetTrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.resetTrafficSelectorPolicy"></a>

```typescript
public resetTrafficSelectorPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnGatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

vpnGatewayConnection.VpnGatewayConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

vpnGatewayConnection.VpnGatewayConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

vpnGatewayConnection.VpnGatewayConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpnGatewayConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnGatewayConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference">VpnGatewayConnectionRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference">VpnGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicy">trafficSelectorPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList">VpnGatewayConnectionTrafficSelectorPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLink">vpnLink</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList">VpnGatewayConnectionVpnLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabledInput">internetSecurityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteIdInput">remoteVpnSiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routingInput">routingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicyInput">trafficSelectorPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLinkInput">vpnLinkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabled">internetSecurityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteId">remoteVpnSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routing"></a>

```typescript
public readonly routing: VpnGatewayConnectionRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference">VpnGatewayConnectionRoutingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeouts"></a>

```typescript
public readonly timeouts: VpnGatewayConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference">VpnGatewayConnectionTimeoutsOutputReference</a>

---

##### `trafficSelectorPolicy`<sup>Required</sup> <a name="trafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicy"></a>

```typescript
public readonly trafficSelectorPolicy: VpnGatewayConnectionTrafficSelectorPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList">VpnGatewayConnectionTrafficSelectorPolicyList</a>

---

##### `vpnLink`<sup>Required</sup> <a name="vpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLink"></a>

```typescript
public readonly vpnLink: VpnGatewayConnectionVpnLinkList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList">VpnGatewayConnectionVpnLinkList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internetSecurityEnabledInput`<sup>Optional</sup> <a name="internetSecurityEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabledInput"></a>

```typescript
public readonly internetSecurityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remoteVpnSiteIdInput`<sup>Optional</sup> <a name="remoteVpnSiteIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteIdInput"></a>

```typescript
public readonly remoteVpnSiteIdInput: string;
```

- *Type:* string

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.routingInput"></a>

```typescript
public readonly routingInput: VpnGatewayConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpnGatewayConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>

---

##### `trafficSelectorPolicyInput`<sup>Optional</sup> <a name="trafficSelectorPolicyInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.trafficSelectorPolicyInput"></a>

```typescript
public readonly trafficSelectorPolicyInput: IResolvable | VpnGatewayConnectionTrafficSelectorPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>[]

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayIdInput"></a>

```typescript
public readonly vpnGatewayIdInput: string;
```

- *Type:* string

---

##### `vpnLinkInput`<sup>Optional</sup> <a name="vpnLinkInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnLinkInput"></a>

```typescript
public readonly vpnLinkInput: IResolvable | VpnGatewayConnectionVpnLink[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetSecurityEnabled`<sup>Required</sup> <a name="internetSecurityEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.internetSecurityEnabled"></a>

```typescript
public readonly internetSecurityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteVpnSiteId`<sup>Required</sup> <a name="remoteVpnSiteId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.remoteVpnSiteId"></a>

```typescript
public readonly remoteVpnSiteId: string;
```

- *Type:* string

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayConnectionConfig <a name="VpnGatewayConnectionConfig" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

const vpnGatewayConnectionConfig: vpnGatewayConnection.VpnGatewayConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.remoteVpnSiteId">remoteVpnSiteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnLink">vpnLink</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>[]</code> | vpn_link block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.internetSecurityEnabled">internetSecurityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.trafficSelectorPolicy">trafficSelectorPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>[]</code> | traffic_selector_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}.

---

##### `remoteVpnSiteId`<sup>Required</sup> <a name="remoteVpnSiteId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.remoteVpnSiteId"></a>

```typescript
public readonly remoteVpnSiteId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}.

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}.

---

##### `vpnLink`<sup>Required</sup> <a name="vpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.vpnLink"></a>

```typescript
public readonly vpnLink: IResolvable | VpnGatewayConnectionVpnLink[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>[]

vpn_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#vpn_link VpnGatewayConnection#vpn_link}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetSecurityEnabled`<sup>Optional</sup> <a name="internetSecurityEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.internetSecurityEnabled"></a>

```typescript
public readonly internetSecurityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.routing"></a>

```typescript
public readonly routing: VpnGatewayConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#routing VpnGatewayConnection#routing}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpnGatewayConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#timeouts VpnGatewayConnection#timeouts}

---

##### `trafficSelectorPolicy`<sup>Optional</sup> <a name="trafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionConfig.property.trafficSelectorPolicy"></a>

```typescript
public readonly trafficSelectorPolicy: IResolvable | VpnGatewayConnectionTrafficSelectorPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>[]

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#traffic_selector_policy VpnGatewayConnection#traffic_selector_policy}

---

### VpnGatewayConnectionRouting <a name="VpnGatewayConnectionRouting" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

const vpnGatewayConnectionRouting: vpnGatewayConnection.VpnGatewayConnectionRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.associatedRouteTable">associatedRouteTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#inbound_route_map_id VpnGatewayConnection#inbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#outbound_route_map_id VpnGatewayConnection#outbound_route_map_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | propagated_route_table block. |

---

##### `associatedRouteTable`<sup>Required</sup> <a name="associatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.associatedRouteTable"></a>

```typescript
public readonly associatedRouteTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}.

---

##### `inboundRouteMapId`<sup>Optional</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.inboundRouteMapId"></a>

```typescript
public readonly inboundRouteMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#inbound_route_map_id VpnGatewayConnection#inbound_route_map_id}.

---

##### `outboundRouteMapId`<sup>Optional</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.outboundRouteMapId"></a>

```typescript
public readonly outboundRouteMapId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#outbound_route_map_id VpnGatewayConnection#outbound_route_map_id}.

---

##### `propagatedRouteTable`<sup>Optional</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting.property.propagatedRouteTable"></a>

```typescript
public readonly propagatedRouteTable: VpnGatewayConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

propagated_route_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#propagated_route_table VpnGatewayConnection#propagated_route_table}

---

### VpnGatewayConnectionRoutingPropagatedRouteTable <a name="VpnGatewayConnectionRoutingPropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

const vpnGatewayConnectionRoutingPropagatedRouteTable: vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#labels VpnGatewayConnection#labels}. |

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#labels VpnGatewayConnection#labels}.

---

### VpnGatewayConnectionTimeouts <a name="VpnGatewayConnectionTimeouts" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

const vpnGatewayConnectionTimeouts: vpnGatewayConnection.VpnGatewayConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#create VpnGatewayConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#delete VpnGatewayConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#read VpnGatewayConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#update VpnGatewayConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#create VpnGatewayConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#delete VpnGatewayConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#read VpnGatewayConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#update VpnGatewayConnection#update}.

---

### VpnGatewayConnectionTrafficSelectorPolicy <a name="VpnGatewayConnectionTrafficSelectorPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

const vpnGatewayConnectionTrafficSelectorPolicy: vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.localAddressRanges">localAddressRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#local_address_ranges VpnGatewayConnection#local_address_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.remoteAddressRanges">remoteAddressRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#remote_address_ranges VpnGatewayConnection#remote_address_ranges}. |

---

##### `localAddressRanges`<sup>Required</sup> <a name="localAddressRanges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.localAddressRanges"></a>

```typescript
public readonly localAddressRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#local_address_ranges VpnGatewayConnection#local_address_ranges}.

---

##### `remoteAddressRanges`<sup>Required</sup> <a name="remoteAddressRanges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy.property.remoteAddressRanges"></a>

```typescript
public readonly remoteAddressRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#remote_address_ranges VpnGatewayConnection#remote_address_ranges}.

---

### VpnGatewayConnectionVpnLink <a name="VpnGatewayConnectionVpnLink" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

const vpnGatewayConnectionVpnLink: vpnGatewayConnection.VpnGatewayConnectionVpnLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.vpnSiteLinkId">vpnSiteLinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bandwidthMbps">bandwidthMbps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bgpEnabled">bgpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#bgp_enabled VpnGatewayConnection#bgp_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.connectionMode">connectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#connection_mode VpnGatewayConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.customBgpAddress">customBgpAddress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>[]</code> | custom_bgp_address block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.egressNatRuleIds">egressNatRuleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#egress_nat_rule_ids VpnGatewayConnection#egress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ingressNatRuleIds">ingressNatRuleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ingress_nat_rule_ids VpnGatewayConnection#ingress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ipsecPolicy">ipsecPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>[]</code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.localAzureIpAddressEnabled">localAzureIpAddressEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.policyBasedTrafficSelectorEnabled">policyBasedTrafficSelectorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#protocol VpnGatewayConnection#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ratelimitEnabled">ratelimitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.routeWeight">routeWeight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#route_weight VpnGatewayConnection#route_weight}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.sharedKey">sharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#shared_key VpnGatewayConnection#shared_key}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}.

---

##### `vpnSiteLinkId`<sup>Required</sup> <a name="vpnSiteLinkId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.vpnSiteLinkId"></a>

```typescript
public readonly vpnSiteLinkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}.

---

##### `bandwidthMbps`<sup>Optional</sup> <a name="bandwidthMbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bandwidthMbps"></a>

```typescript
public readonly bandwidthMbps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}.

---

##### `bgpEnabled`<sup>Optional</sup> <a name="bgpEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.bgpEnabled"></a>

```typescript
public readonly bgpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#bgp_enabled VpnGatewayConnection#bgp_enabled}.

---

##### `connectionMode`<sup>Optional</sup> <a name="connectionMode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.connectionMode"></a>

```typescript
public readonly connectionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#connection_mode VpnGatewayConnection#connection_mode}.

---

##### `customBgpAddress`<sup>Optional</sup> <a name="customBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.customBgpAddress"></a>

```typescript
public readonly customBgpAddress: IResolvable | VpnGatewayConnectionVpnLinkCustomBgpAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>[]

custom_bgp_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#custom_bgp_address VpnGatewayConnection#custom_bgp_address}

---

##### `egressNatRuleIds`<sup>Optional</sup> <a name="egressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.egressNatRuleIds"></a>

```typescript
public readonly egressNatRuleIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#egress_nat_rule_ids VpnGatewayConnection#egress_nat_rule_ids}.

---

##### `ingressNatRuleIds`<sup>Optional</sup> <a name="ingressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ingressNatRuleIds"></a>

```typescript
public readonly ingressNatRuleIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ingress_nat_rule_ids VpnGatewayConnection#ingress_nat_rule_ids}.

---

##### `ipsecPolicy`<sup>Optional</sup> <a name="ipsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ipsecPolicy"></a>

```typescript
public readonly ipsecPolicy: IResolvable | VpnGatewayConnectionVpnLinkIpsecPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>[]

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ipsec_policy VpnGatewayConnection#ipsec_policy}

---

##### `localAzureIpAddressEnabled`<sup>Optional</sup> <a name="localAzureIpAddressEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.localAzureIpAddressEnabled"></a>

```typescript
public readonly localAzureIpAddressEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}.

---

##### `policyBasedTrafficSelectorEnabled`<sup>Optional</sup> <a name="policyBasedTrafficSelectorEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.policyBasedTrafficSelectorEnabled"></a>

```typescript
public readonly policyBasedTrafficSelectorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#protocol VpnGatewayConnection#protocol}.

---

##### `ratelimitEnabled`<sup>Optional</sup> <a name="ratelimitEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.ratelimitEnabled"></a>

```typescript
public readonly ratelimitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}.

---

##### `routeWeight`<sup>Optional</sup> <a name="routeWeight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.routeWeight"></a>

```typescript
public readonly routeWeight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#route_weight VpnGatewayConnection#route_weight}.

---

##### `sharedKey`<sup>Optional</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink.property.sharedKey"></a>

```typescript
public readonly sharedKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#shared_key VpnGatewayConnection#shared_key}.

---

### VpnGatewayConnectionVpnLinkCustomBgpAddress <a name="VpnGatewayConnectionVpnLinkCustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

const vpnGatewayConnectionVpnLinkCustomBgpAddress: vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ip_address VpnGatewayConnection#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipConfigurationId">ipConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ip_configuration_id VpnGatewayConnection#ip_configuration_id}. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ip_address VpnGatewayConnection#ip_address}.

---

##### `ipConfigurationId`<sup>Required</sup> <a name="ipConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress.property.ipConfigurationId"></a>

```typescript
public readonly ipConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ip_configuration_id VpnGatewayConnection#ip_configuration_id}.

---

### VpnGatewayConnectionVpnLinkIpsecPolicy <a name="VpnGatewayConnectionVpnLinkIpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

const vpnGatewayConnectionVpnLinkIpsecPolicy: vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.dhGroup">dhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#dh_group VpnGatewayConnection#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#encryption_algorithm VpnGatewayConnection#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeEncryptionAlgorithm">ikeEncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeIntegrityAlgorithm">ikeIntegrityAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#integrity_algorithm VpnGatewayConnection#integrity_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.pfsGroup">pfsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#pfs_group VpnGatewayConnection#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saDataSizeKb">saDataSizeKb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saLifetimeSec">saLifetimeSec</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}. |

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.dhGroup"></a>

```typescript
public readonly dhGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#dh_group VpnGatewayConnection#dh_group}.

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#encryption_algorithm VpnGatewayConnection#encryption_algorithm}.

---

##### `ikeEncryptionAlgorithm`<sup>Required</sup> <a name="ikeEncryptionAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeEncryptionAlgorithm"></a>

```typescript
public readonly ikeEncryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}.

---

##### `ikeIntegrityAlgorithm`<sup>Required</sup> <a name="ikeIntegrityAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.ikeIntegrityAlgorithm"></a>

```typescript
public readonly ikeIntegrityAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}.

---

##### `integrityAlgorithm`<sup>Required</sup> <a name="integrityAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.integrityAlgorithm"></a>

```typescript
public readonly integrityAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#integrity_algorithm VpnGatewayConnection#integrity_algorithm}.

---

##### `pfsGroup`<sup>Required</sup> <a name="pfsGroup" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.pfsGroup"></a>

```typescript
public readonly pfsGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#pfs_group VpnGatewayConnection#pfs_group}.

---

##### `saDataSizeKb`<sup>Required</sup> <a name="saDataSizeKb" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saDataSizeKb"></a>

```typescript
public readonly saDataSizeKb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}.

---

##### `saLifetimeSec`<sup>Required</sup> <a name="saLifetimeSec" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy.property.saLifetimeSec"></a>

```typescript
public readonly saLifetimeSec: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/vpn_gateway_connection#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayConnectionRoutingOutputReference <a name="VpnGatewayConnectionRoutingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable">putPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetInboundRouteMapId">resetInboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetOutboundRouteMapId">resetOutboundRouteMapId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetPropagatedRouteTable">resetPropagatedRouteTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropagatedRouteTable` <a name="putPropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable"></a>

```typescript
public putPropagatedRouteTable(value: VpnGatewayConnectionRoutingPropagatedRouteTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.putPropagatedRouteTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

---

##### `resetInboundRouteMapId` <a name="resetInboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetInboundRouteMapId"></a>

```typescript
public resetInboundRouteMapId(): void
```

##### `resetOutboundRouteMapId` <a name="resetOutboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetOutboundRouteMapId"></a>

```typescript
public resetOutboundRouteMapId(): void
```

##### `resetPropagatedRouteTable` <a name="resetPropagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.resetPropagatedRouteTable"></a>

```typescript
public resetPropagatedRouteTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTable">propagatedRouteTable</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference">VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTableInput">associatedRouteTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapIdInput">inboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapIdInput">outboundRouteMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTableInput">propagatedRouteTableInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTable">associatedRouteTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapId">inboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapId">outboundRouteMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propagatedRouteTable`<sup>Required</sup> <a name="propagatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTable"></a>

```typescript
public readonly propagatedRouteTable: VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference">VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference</a>

---

##### `associatedRouteTableInput`<sup>Optional</sup> <a name="associatedRouteTableInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTableInput"></a>

```typescript
public readonly associatedRouteTableInput: string;
```

- *Type:* string

---

##### `inboundRouteMapIdInput`<sup>Optional</sup> <a name="inboundRouteMapIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapIdInput"></a>

```typescript
public readonly inboundRouteMapIdInput: string;
```

- *Type:* string

---

##### `outboundRouteMapIdInput`<sup>Optional</sup> <a name="outboundRouteMapIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapIdInput"></a>

```typescript
public readonly outboundRouteMapIdInput: string;
```

- *Type:* string

---

##### `propagatedRouteTableInput`<sup>Optional</sup> <a name="propagatedRouteTableInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.propagatedRouteTableInput"></a>

```typescript
public readonly propagatedRouteTableInput: VpnGatewayConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

---

##### `associatedRouteTable`<sup>Required</sup> <a name="associatedRouteTable" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.associatedRouteTable"></a>

```typescript
public readonly associatedRouteTable: string;
```

- *Type:* string

---

##### `inboundRouteMapId`<sup>Required</sup> <a name="inboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.inboundRouteMapId"></a>

```typescript
public readonly inboundRouteMapId: string;
```

- *Type:* string

---

##### `outboundRouteMapId`<sup>Required</sup> <a name="outboundRouteMapId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.outboundRouteMapId"></a>

```typescript
public readonly outboundRouteMapId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnGatewayConnectionRouting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRouting">VpnGatewayConnectionRouting</a>

---


### VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference <a name="VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput">routeTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `routeTableIdsInput`<sup>Optional</sup> <a name="routeTableIdsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIdsInput"></a>

```typescript
public readonly routeTableIdsInput: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpnGatewayConnectionRoutingPropagatedRouteTable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionRoutingPropagatedRouteTable">VpnGatewayConnectionRoutingPropagatedRouteTable</a>

---


### VpnGatewayConnectionTimeoutsOutputReference <a name="VpnGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTimeouts">VpnGatewayConnectionTimeouts</a>

---


### VpnGatewayConnectionTrafficSelectorPolicyList <a name="VpnGatewayConnectionTrafficSelectorPolicyList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get"></a>

```typescript
public get(index: number): VpnGatewayConnectionTrafficSelectorPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionTrafficSelectorPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>[]

---


### VpnGatewayConnectionTrafficSelectorPolicyOutputReference <a name="VpnGatewayConnectionTrafficSelectorPolicyOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRangesInput">localAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRangesInput">remoteAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRanges">localAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRanges">remoteAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localAddressRangesInput`<sup>Optional</sup> <a name="localAddressRangesInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRangesInput"></a>

```typescript
public readonly localAddressRangesInput: string[];
```

- *Type:* string[]

---

##### `remoteAddressRangesInput`<sup>Optional</sup> <a name="remoteAddressRangesInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRangesInput"></a>

```typescript
public readonly remoteAddressRangesInput: string[];
```

- *Type:* string[]

---

##### `localAddressRanges`<sup>Required</sup> <a name="localAddressRanges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressRanges"></a>

```typescript
public readonly localAddressRanges: string[];
```

- *Type:* string[]

---

##### `remoteAddressRanges`<sup>Required</sup> <a name="remoteAddressRanges" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressRanges"></a>

```typescript
public readonly remoteAddressRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionTrafficSelectorPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionTrafficSelectorPolicy">VpnGatewayConnectionTrafficSelectorPolicy</a>

---


### VpnGatewayConnectionVpnLinkCustomBgpAddressList <a name="VpnGatewayConnectionVpnLinkCustomBgpAddressList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get"></a>

```typescript
public get(index: number): VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionVpnLinkCustomBgpAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>[]

---


### VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference <a name="VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationIdInput">ipConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationId">ipConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipConfigurationIdInput`<sup>Optional</sup> <a name="ipConfigurationIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationIdInput"></a>

```typescript
public readonly ipConfigurationIdInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipConfigurationId`<sup>Required</sup> <a name="ipConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.ipConfigurationId"></a>

```typescript
public readonly ipConfigurationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionVpnLinkCustomBgpAddress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>

---


### VpnGatewayConnectionVpnLinkIpsecPolicyList <a name="VpnGatewayConnectionVpnLinkIpsecPolicyList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get"></a>

```typescript
public get(index: number): VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionVpnLinkIpsecPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>[]

---


### VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference <a name="VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroupInput">dhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithmInput">ikeEncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithmInput">ikeIntegrityAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithmInput">integrityAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroupInput">pfsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKbInput">saDataSizeKbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSecInput">saLifetimeSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroup">dhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithm">ikeEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithm">ikeIntegrityAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroup">pfsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKb">saDataSizeKb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSec">saLifetimeSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dhGroupInput`<sup>Optional</sup> <a name="dhGroupInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroupInput"></a>

```typescript
public readonly dhGroupInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `ikeEncryptionAlgorithmInput`<sup>Optional</sup> <a name="ikeEncryptionAlgorithmInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithmInput"></a>

```typescript
public readonly ikeEncryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `ikeIntegrityAlgorithmInput`<sup>Optional</sup> <a name="ikeIntegrityAlgorithmInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithmInput"></a>

```typescript
public readonly ikeIntegrityAlgorithmInput: string;
```

- *Type:* string

---

##### `integrityAlgorithmInput`<sup>Optional</sup> <a name="integrityAlgorithmInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithmInput"></a>

```typescript
public readonly integrityAlgorithmInput: string;
```

- *Type:* string

---

##### `pfsGroupInput`<sup>Optional</sup> <a name="pfsGroupInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```typescript
public readonly pfsGroupInput: string;
```

- *Type:* string

---

##### `saDataSizeKbInput`<sup>Optional</sup> <a name="saDataSizeKbInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKbInput"></a>

```typescript
public readonly saDataSizeKbInput: number;
```

- *Type:* number

---

##### `saLifetimeSecInput`<sup>Optional</sup> <a name="saLifetimeSecInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSecInput"></a>

```typescript
public readonly saLifetimeSecInput: number;
```

- *Type:* number

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.dhGroup"></a>

```typescript
public readonly dhGroup: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `ikeEncryptionAlgorithm`<sup>Required</sup> <a name="ikeEncryptionAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeEncryptionAlgorithm"></a>

```typescript
public readonly ikeEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `ikeIntegrityAlgorithm`<sup>Required</sup> <a name="ikeIntegrityAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.ikeIntegrityAlgorithm"></a>

```typescript
public readonly ikeIntegrityAlgorithm: string;
```

- *Type:* string

---

##### `integrityAlgorithm`<sup>Required</sup> <a name="integrityAlgorithm" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.integrityAlgorithm"></a>

```typescript
public readonly integrityAlgorithm: string;
```

- *Type:* string

---

##### `pfsGroup`<sup>Required</sup> <a name="pfsGroup" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.pfsGroup"></a>

```typescript
public readonly pfsGroup: string;
```

- *Type:* string

---

##### `saDataSizeKb`<sup>Required</sup> <a name="saDataSizeKb" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saDataSizeKb"></a>

```typescript
public readonly saDataSizeKb: number;
```

- *Type:* number

---

##### `saLifetimeSec`<sup>Required</sup> <a name="saLifetimeSec" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.saLifetimeSec"></a>

```typescript
public readonly saLifetimeSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionVpnLinkIpsecPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>

---


### VpnGatewayConnectionVpnLinkList <a name="VpnGatewayConnectionVpnLinkList" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionVpnLinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get"></a>

```typescript
public get(index: number): VpnGatewayConnectionVpnLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionVpnLink[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>[]

---


### VpnGatewayConnectionVpnLinkOutputReference <a name="VpnGatewayConnectionVpnLinkOutputReference" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer"></a>

```typescript
import { vpnGatewayConnection } from '@cdktf/provider-azurerm'

new vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress">putCustomBgpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy">putIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBandwidthMbps">resetBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBgpEnabled">resetBgpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetConnectionMode">resetConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetCustomBgpAddress">resetCustomBgpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetEgressNatRuleIds">resetEgressNatRuleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIngressNatRuleIds">resetIngressNatRuleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIpsecPolicy">resetIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetLocalAzureIpAddressEnabled">resetLocalAzureIpAddressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetPolicyBasedTrafficSelectorEnabled">resetPolicyBasedTrafficSelectorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRatelimitEnabled">resetRatelimitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRouteWeight">resetRouteWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetSharedKey">resetSharedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomBgpAddress` <a name="putCustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress"></a>

```typescript
public putCustomBgpAddress(value: IResolvable | VpnGatewayConnectionVpnLinkCustomBgpAddress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putCustomBgpAddress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>[]

---

##### `putIpsecPolicy` <a name="putIpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy"></a>

```typescript
public putIpsecPolicy(value: IResolvable | VpnGatewayConnectionVpnLinkIpsecPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.putIpsecPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>[]

---

##### `resetBandwidthMbps` <a name="resetBandwidthMbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBandwidthMbps"></a>

```typescript
public resetBandwidthMbps(): void
```

##### `resetBgpEnabled` <a name="resetBgpEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetBgpEnabled"></a>

```typescript
public resetBgpEnabled(): void
```

##### `resetConnectionMode` <a name="resetConnectionMode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetConnectionMode"></a>

```typescript
public resetConnectionMode(): void
```

##### `resetCustomBgpAddress` <a name="resetCustomBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetCustomBgpAddress"></a>

```typescript
public resetCustomBgpAddress(): void
```

##### `resetEgressNatRuleIds` <a name="resetEgressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetEgressNatRuleIds"></a>

```typescript
public resetEgressNatRuleIds(): void
```

##### `resetIngressNatRuleIds` <a name="resetIngressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIngressNatRuleIds"></a>

```typescript
public resetIngressNatRuleIds(): void
```

##### `resetIpsecPolicy` <a name="resetIpsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetIpsecPolicy"></a>

```typescript
public resetIpsecPolicy(): void
```

##### `resetLocalAzureIpAddressEnabled` <a name="resetLocalAzureIpAddressEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetLocalAzureIpAddressEnabled"></a>

```typescript
public resetLocalAzureIpAddressEnabled(): void
```

##### `resetPolicyBasedTrafficSelectorEnabled` <a name="resetPolicyBasedTrafficSelectorEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetPolicyBasedTrafficSelectorEnabled"></a>

```typescript
public resetPolicyBasedTrafficSelectorEnabled(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRatelimitEnabled` <a name="resetRatelimitEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRatelimitEnabled"></a>

```typescript
public resetRatelimitEnabled(): void
```

##### `resetRouteWeight` <a name="resetRouteWeight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetRouteWeight"></a>

```typescript
public resetRouteWeight(): void
```

##### `resetSharedKey` <a name="resetSharedKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.resetSharedKey"></a>

```typescript
public resetSharedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddress">customBgpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList">VpnGatewayConnectionVpnLinkCustomBgpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicy">ipsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList">VpnGatewayConnectionVpnLinkIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbpsInput">bandwidthMbpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabledInput">bgpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionModeInput">connectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddressInput">customBgpAddressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIdsInput">egressNatRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIdsInput">ingressNatRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicyInput">ipsecPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabledInput">localAzureIpAddressEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabledInput">policyBasedTrafficSelectorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabledInput">ratelimitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeightInput">routeWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKeyInput">sharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkIdInput">vpnSiteLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbps">bandwidthMbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabled">bgpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionMode">connectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIds">egressNatRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIds">ingressNatRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabled">localAzureIpAddressEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabled">policyBasedTrafficSelectorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabled">ratelimitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeight">routeWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKey">sharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkId">vpnSiteLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customBgpAddress`<sup>Required</sup> <a name="customBgpAddress" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddress"></a>

```typescript
public readonly customBgpAddress: VpnGatewayConnectionVpnLinkCustomBgpAddressList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddressList">VpnGatewayConnectionVpnLinkCustomBgpAddressList</a>

---

##### `ipsecPolicy`<sup>Required</sup> <a name="ipsecPolicy" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicy"></a>

```typescript
public readonly ipsecPolicy: VpnGatewayConnectionVpnLinkIpsecPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicyList">VpnGatewayConnectionVpnLinkIpsecPolicyList</a>

---

##### `bandwidthMbpsInput`<sup>Optional</sup> <a name="bandwidthMbpsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbpsInput"></a>

```typescript
public readonly bandwidthMbpsInput: number;
```

- *Type:* number

---

##### `bgpEnabledInput`<sup>Optional</sup> <a name="bgpEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabledInput"></a>

```typescript
public readonly bgpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionModeInput`<sup>Optional</sup> <a name="connectionModeInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionModeInput"></a>

```typescript
public readonly connectionModeInput: string;
```

- *Type:* string

---

##### `customBgpAddressInput`<sup>Optional</sup> <a name="customBgpAddressInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.customBgpAddressInput"></a>

```typescript
public readonly customBgpAddressInput: IResolvable | VpnGatewayConnectionVpnLinkCustomBgpAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkCustomBgpAddress">VpnGatewayConnectionVpnLinkCustomBgpAddress</a>[]

---

##### `egressNatRuleIdsInput`<sup>Optional</sup> <a name="egressNatRuleIdsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIdsInput"></a>

```typescript
public readonly egressNatRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `ingressNatRuleIdsInput`<sup>Optional</sup> <a name="ingressNatRuleIdsInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIdsInput"></a>

```typescript
public readonly ingressNatRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `ipsecPolicyInput`<sup>Optional</sup> <a name="ipsecPolicyInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ipsecPolicyInput"></a>

```typescript
public readonly ipsecPolicyInput: IResolvable | VpnGatewayConnectionVpnLinkIpsecPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkIpsecPolicy">VpnGatewayConnectionVpnLinkIpsecPolicy</a>[]

---

##### `localAzureIpAddressEnabledInput`<sup>Optional</sup> <a name="localAzureIpAddressEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabledInput"></a>

```typescript
public readonly localAzureIpAddressEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyBasedTrafficSelectorEnabledInput`<sup>Optional</sup> <a name="policyBasedTrafficSelectorEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabledInput"></a>

```typescript
public readonly policyBasedTrafficSelectorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ratelimitEnabledInput`<sup>Optional</sup> <a name="ratelimitEnabledInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabledInput"></a>

```typescript
public readonly ratelimitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routeWeightInput`<sup>Optional</sup> <a name="routeWeightInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeightInput"></a>

```typescript
public readonly routeWeightInput: number;
```

- *Type:* number

---

##### `sharedKeyInput`<sup>Optional</sup> <a name="sharedKeyInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKeyInput"></a>

```typescript
public readonly sharedKeyInput: string;
```

- *Type:* string

---

##### `vpnSiteLinkIdInput`<sup>Optional</sup> <a name="vpnSiteLinkIdInput" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkIdInput"></a>

```typescript
public readonly vpnSiteLinkIdInput: string;
```

- *Type:* string

---

##### `bandwidthMbps`<sup>Required</sup> <a name="bandwidthMbps" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bandwidthMbps"></a>

```typescript
public readonly bandwidthMbps: number;
```

- *Type:* number

---

##### `bgpEnabled`<sup>Required</sup> <a name="bgpEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.bgpEnabled"></a>

```typescript
public readonly bgpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionMode`<sup>Required</sup> <a name="connectionMode" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.connectionMode"></a>

```typescript
public readonly connectionMode: string;
```

- *Type:* string

---

##### `egressNatRuleIds`<sup>Required</sup> <a name="egressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.egressNatRuleIds"></a>

```typescript
public readonly egressNatRuleIds: string[];
```

- *Type:* string[]

---

##### `ingressNatRuleIds`<sup>Required</sup> <a name="ingressNatRuleIds" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ingressNatRuleIds"></a>

```typescript
public readonly ingressNatRuleIds: string[];
```

- *Type:* string[]

---

##### `localAzureIpAddressEnabled`<sup>Required</sup> <a name="localAzureIpAddressEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.localAzureIpAddressEnabled"></a>

```typescript
public readonly localAzureIpAddressEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyBasedTrafficSelectorEnabled`<sup>Required</sup> <a name="policyBasedTrafficSelectorEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.policyBasedTrafficSelectorEnabled"></a>

```typescript
public readonly policyBasedTrafficSelectorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ratelimitEnabled`<sup>Required</sup> <a name="ratelimitEnabled" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.ratelimitEnabled"></a>

```typescript
public readonly ratelimitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routeWeight`<sup>Required</sup> <a name="routeWeight" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.routeWeight"></a>

```typescript
public readonly routeWeight: number;
```

- *Type:* number

---

##### `sharedKey`<sup>Required</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.sharedKey"></a>

```typescript
public readonly sharedKey: string;
```

- *Type:* string

---

##### `vpnSiteLinkId`<sup>Required</sup> <a name="vpnSiteLinkId" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.vpnSiteLinkId"></a>

```typescript
public readonly vpnSiteLinkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayConnectionVpnLink;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.vpnGatewayConnection.VpnGatewayConnectionVpnLink">VpnGatewayConnectionVpnLink</a>

---



