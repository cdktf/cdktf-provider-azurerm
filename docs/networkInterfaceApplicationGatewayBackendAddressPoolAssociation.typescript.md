# `networkInterfaceApplicationGatewayBackendAddressPoolAssociation` Submodule <a name="`networkInterfaceApplicationGatewayBackendAddressPoolAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association azurerm_network_interface_application_gateway_backend_address_pool_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer"></a>

```typescript
import { networkInterfaceApplicationGatewayBackendAddressPoolAssociation } from '@cdktf/provider-azurerm'

new networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation(scope: Construct, id: string, config: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct"></a>

```typescript
import { networkInterfaceApplicationGatewayBackendAddressPoolAssociation } from '@cdktf/provider-azurerm'

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement"></a>

```typescript
import { networkInterfaceApplicationGatewayBackendAddressPoolAssociation } from '@cdktf/provider-azurerm'

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource"></a>

```typescript
import { networkInterfaceApplicationGatewayBackendAddressPoolAssociation } from '@cdktf/provider-azurerm'

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport"></a>

```typescript
import { networkInterfaceApplicationGatewayBackendAddressPoolAssociation } from '@cdktf/provider-azurerm'

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolIdInput">backendAddressPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationNameInput">ipConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolId">backendAddressPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationName">ipConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference</a>

---

##### `backendAddressPoolIdInput`<sup>Optional</sup> <a name="backendAddressPoolIdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolIdInput"></a>

```typescript
public readonly backendAddressPoolIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipConfigurationNameInput`<sup>Optional</sup> <a name="ipConfigurationNameInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationNameInput"></a>

```typescript
public readonly ipConfigurationNameInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolId"></a>

```typescript
public readonly backendAddressPoolId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipConfigurationName`<sup>Required</sup> <a name="ipConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationName"></a>

```typescript
public readonly ipConfigurationName: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.Initializer"></a>

```typescript
import { networkInterfaceApplicationGatewayBackendAddressPoolAssociation } from '@cdktf/provider-azurerm'

const networkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig: networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.backendAddressPoolId">backendAddressPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.ipConfigurationName">ipConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendAddressPoolId`<sup>Required</sup> <a name="backendAddressPoolId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.backendAddressPoolId"></a>

```typescript
public readonly backendAddressPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}.

---

##### `ipConfigurationName`<sup>Required</sup> <a name="ipConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.ipConfigurationName"></a>

```typescript
public readonly ipConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#timeouts NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#timeouts}

---

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.Initializer"></a>

```typescript
import { networkInterfaceApplicationGatewayBackendAddressPoolAssociation } from '@cdktf/provider-azurerm'

const networkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts: networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#create NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#delete NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#read NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#create NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#delete NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_interface_application_gateway_backend_address_pool_association#read NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkInterfaceApplicationGatewayBackendAddressPoolAssociation } from '@cdktf/provider-azurerm'

new networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

---



