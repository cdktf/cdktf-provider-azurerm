# `databricksVirtualNetworkPeering` Submodule <a name="`databricksVirtualNetworkPeering` Submodule" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksVirtualNetworkPeering <a name="DatabricksVirtualNetworkPeering" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering azurerm_databricks_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer"></a>

```typescript
import { databricksVirtualNetworkPeering } from '@cdktf/provider-azurerm'

new databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering(scope: Construct, id: string, config: DatabricksVirtualNetworkPeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig">DatabricksVirtualNetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig">DatabricksVirtualNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic">resetAllowForwardedTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit">resetAllowGatewayTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess">resetAllowVirtualNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways">resetUseRemoteGateways</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabricksVirtualNetworkPeeringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---

##### `resetAllowForwardedTraffic` <a name="resetAllowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic"></a>

```typescript
public resetAllowForwardedTraffic(): void
```

##### `resetAllowGatewayTransit` <a name="resetAllowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit"></a>

```typescript
public resetAllowGatewayTransit(): void
```

##### `resetAllowVirtualNetworkAccess` <a name="resetAllowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess"></a>

```typescript
public resetAllowVirtualNetworkAccess(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseRemoteGateways` <a name="resetUseRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways"></a>

```typescript
public resetUseRemoteGateways(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabricksVirtualNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct"></a>

```typescript
import { databricksVirtualNetworkPeering } from '@cdktf/provider-azurerm'

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement"></a>

```typescript
import { databricksVirtualNetworkPeering } from '@cdktf/provider-azurerm'

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource"></a>

```typescript
import { databricksVirtualNetworkPeering } from '@cdktf/provider-azurerm'

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport"></a>

```typescript
import { databricksVirtualNetworkPeering } from '@cdktf/provider-azurerm'

databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabricksVirtualNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabricksVirtualNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabricksVirtualNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksVirtualNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes">addressSpacePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput">allowForwardedTrafficInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput">allowGatewayTransitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput">allowVirtualNetworkAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput">remoteAddressSpacePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput">remoteVirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput">useRemoteGatewaysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit">allowGatewayTransit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess">allowVirtualNetworkAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes">remoteAddressSpacePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways">useRemoteGateways</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressSpacePrefixes`<sup>Required</sup> <a name="addressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes"></a>

```typescript
public readonly addressSpacePrefixes: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts"></a>

```typescript
public readonly timeouts: DatabricksVirtualNetworkPeeringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `allowForwardedTrafficInput`<sup>Optional</sup> <a name="allowForwardedTrafficInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput"></a>

```typescript
public readonly allowForwardedTrafficInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowGatewayTransitInput`<sup>Optional</sup> <a name="allowGatewayTransitInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput"></a>

```typescript
public readonly allowGatewayTransitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVirtualNetworkAccessInput`<sup>Optional</sup> <a name="allowVirtualNetworkAccessInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput"></a>

```typescript
public readonly allowVirtualNetworkAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remoteAddressSpacePrefixesInput`<sup>Optional</sup> <a name="remoteAddressSpacePrefixesInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput"></a>

```typescript
public readonly remoteAddressSpacePrefixesInput: string[];
```

- *Type:* string[]

---

##### `remoteVirtualNetworkIdInput`<sup>Optional</sup> <a name="remoteVirtualNetworkIdInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput"></a>

```typescript
public readonly remoteVirtualNetworkIdInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabricksVirtualNetworkPeeringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---

##### `useRemoteGatewaysInput`<sup>Optional</sup> <a name="useRemoteGatewaysInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput"></a>

```typescript
public readonly useRemoteGatewaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `allowForwardedTraffic`<sup>Required</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic"></a>

```typescript
public readonly allowForwardedTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowGatewayTransit`<sup>Required</sup> <a name="allowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit"></a>

```typescript
public readonly allowGatewayTransit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVirtualNetworkAccess`<sup>Required</sup> <a name="allowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```typescript
public readonly allowVirtualNetworkAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteAddressSpacePrefixes`<sup>Required</sup> <a name="remoteAddressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes"></a>

```typescript
public readonly remoteAddressSpacePrefixes: string[];
```

- *Type:* string[]

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```typescript
public readonly remoteVirtualNetworkId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `useRemoteGateways`<sup>Required</sup> <a name="useRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways"></a>

```typescript
public readonly useRemoteGateways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksVirtualNetworkPeeringConfig <a name="DatabricksVirtualNetworkPeeringConfig" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.Initializer"></a>

```typescript
import { databricksVirtualNetworkPeering } from '@cdktf/provider-azurerm'

const databricksVirtualNetworkPeeringConfig: databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes">remoteAddressSpacePrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId">remoteVirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic">allowForwardedTraffic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit">allowGatewayTransit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess">allowVirtualNetworkAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways">useRemoteGateways</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}.

---

##### `remoteAddressSpacePrefixes`<sup>Required</sup> <a name="remoteAddressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes"></a>

```typescript
public readonly remoteAddressSpacePrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}.

---

##### `remoteVirtualNetworkId`<sup>Required</sup> <a name="remoteVirtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId"></a>

```typescript
public readonly remoteVirtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}.

---

##### `allowForwardedTraffic`<sup>Optional</sup> <a name="allowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic"></a>

```typescript
public readonly allowForwardedTraffic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `allowGatewayTransit`<sup>Optional</sup> <a name="allowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit"></a>

```typescript
public readonly allowGatewayTransit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}.

---

##### `allowVirtualNetworkAccess`<sup>Optional</sup> <a name="allowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess"></a>

```typescript
public readonly allowVirtualNetworkAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabricksVirtualNetworkPeeringTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#timeouts DatabricksVirtualNetworkPeering#timeouts}

---

##### `useRemoteGateways`<sup>Optional</sup> <a name="useRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways"></a>

```typescript
public readonly useRemoteGateways: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}.

---

### DatabricksVirtualNetworkPeeringTimeouts <a name="DatabricksVirtualNetworkPeeringTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.Initializer"></a>

```typescript
import { databricksVirtualNetworkPeering } from '@cdktf/provider-azurerm'

const databricksVirtualNetworkPeeringTimeouts: databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksVirtualNetworkPeeringTimeoutsOutputReference <a name="DatabricksVirtualNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```typescript
import { databricksVirtualNetworkPeering } from '@cdktf/provider-azurerm'

new databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabricksVirtualNetworkPeeringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---



