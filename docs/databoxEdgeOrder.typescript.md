# `azurerm_databox_edge_order`

Refer to the Terraform Registory for docs: [`azurerm_databox_edge_order`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order).

# `databoxEdgeOrder` Submodule <a name="`databoxEdgeOrder` Submodule" id="@cdktf/provider-azurerm.databoxEdgeOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataboxEdgeOrder <a name="DataboxEdgeOrder" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order azurerm_databox_edge_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrder(scope: Construct, id: string, config: DataboxEdgeOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig">DataboxEdgeOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig">DataboxEdgeOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact">putContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress">putShipmentAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putContact` <a name="putContact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact"></a>

```typescript
public putContact(value: DataboxEdgeOrderContact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---

##### `putShipmentAddress` <a name="putShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress"></a>

```typescript
public putShipmentAddress(value: DataboxEdgeOrderShipmentAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts"></a>

```typescript
public putTimeouts(value: DataboxEdgeOrderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

databoxEdgeOrder.DataboxEdgeOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference">DataboxEdgeOrderContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.returnTracking">returnTracking</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList">DataboxEdgeOrderReturnTrackingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddress">shipmentAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference">DataboxEdgeOrderShipmentAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentHistory">shipmentHistory</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList">DataboxEdgeOrderShipmentHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentTracking">shipmentTracking</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList">DataboxEdgeOrderShipmentTrackingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.status">status</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList">DataboxEdgeOrderStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference">DataboxEdgeOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contactInput">contactInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddressInput">shipmentAddressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contact"></a>

```typescript
public readonly contact: DataboxEdgeOrderContactOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference">DataboxEdgeOrderContactOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `returnTracking`<sup>Required</sup> <a name="returnTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.returnTracking"></a>

```typescript
public readonly returnTracking: DataboxEdgeOrderReturnTrackingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList">DataboxEdgeOrderReturnTrackingList</a>

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `shipmentAddress`<sup>Required</sup> <a name="shipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddress"></a>

```typescript
public readonly shipmentAddress: DataboxEdgeOrderShipmentAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference">DataboxEdgeOrderShipmentAddressOutputReference</a>

---

##### `shipmentHistory`<sup>Required</sup> <a name="shipmentHistory" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentHistory"></a>

```typescript
public readonly shipmentHistory: DataboxEdgeOrderShipmentHistoryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList">DataboxEdgeOrderShipmentHistoryList</a>

---

##### `shipmentTracking`<sup>Required</sup> <a name="shipmentTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentTracking"></a>

```typescript
public readonly shipmentTracking: DataboxEdgeOrderShipmentTrackingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList">DataboxEdgeOrderShipmentTrackingList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.status"></a>

```typescript
public readonly status: DataboxEdgeOrderStatusList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList">DataboxEdgeOrderStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeouts"></a>

```typescript
public readonly timeouts: DataboxEdgeOrderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference">DataboxEdgeOrderTimeoutsOutputReference</a>

---

##### `contactInput`<sup>Optional</sup> <a name="contactInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contactInput"></a>

```typescript
public readonly contactInput: DataboxEdgeOrderContact;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `shipmentAddressInput`<sup>Optional</sup> <a name="shipmentAddressInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddressInput"></a>

```typescript
public readonly shipmentAddressInput: DataboxEdgeOrderShipmentAddress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataboxEdgeOrderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a>

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataboxEdgeOrderConfig <a name="DataboxEdgeOrderConfig" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

const databoxEdgeOrderConfig: databoxEdgeOrder.DataboxEdgeOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#device_name DataboxEdgeOrder#device_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#resource_group_name DataboxEdgeOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.shipmentAddress">shipmentAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | shipment_address block. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#id DataboxEdgeOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.contact"></a>

```typescript
public readonly contact: DataboxEdgeOrderContact;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#contact DataboxEdgeOrder#contact}

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#device_name DataboxEdgeOrder#device_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#resource_group_name DataboxEdgeOrder#resource_group_name}.

---

##### `shipmentAddress`<sup>Required</sup> <a name="shipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.shipmentAddress"></a>

```typescript
public readonly shipmentAddress: DataboxEdgeOrderShipmentAddress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

shipment_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#shipment_address DataboxEdgeOrder#shipment_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#id DataboxEdgeOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataboxEdgeOrderTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#timeouts DataboxEdgeOrder#timeouts}

---

### DataboxEdgeOrderContact <a name="DataboxEdgeOrderContact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

const databoxEdgeOrderContact: databoxEdgeOrder.DataboxEdgeOrderContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.companyName">companyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#company_name DataboxEdgeOrder#company_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.emails">emails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#emails DataboxEdgeOrder#emails}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#name DataboxEdgeOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#phone_number DataboxEdgeOrder#phone_number}. |

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#company_name DataboxEdgeOrder#company_name}.

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#emails DataboxEdgeOrder#emails}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#name DataboxEdgeOrder#name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#phone_number DataboxEdgeOrder#phone_number}.

---

### DataboxEdgeOrderReturnTracking <a name="DataboxEdgeOrderReturnTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

const databoxEdgeOrderReturnTracking: databoxEdgeOrder.DataboxEdgeOrderReturnTracking = { ... }
```


### DataboxEdgeOrderShipmentAddress <a name="DataboxEdgeOrderShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

const databoxEdgeOrderShipmentAddress: databoxEdgeOrder.DataboxEdgeOrderShipmentAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.address">address</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#address DataboxEdgeOrder#address}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#city DataboxEdgeOrder#city}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#country DataboxEdgeOrder#country}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#postal_code DataboxEdgeOrder#postal_code}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#state DataboxEdgeOrder#state}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.address"></a>

```typescript
public readonly address: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#address DataboxEdgeOrder#address}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#city DataboxEdgeOrder#city}.

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#country DataboxEdgeOrder#country}.

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#postal_code DataboxEdgeOrder#postal_code}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#state DataboxEdgeOrder#state}.

---

### DataboxEdgeOrderShipmentHistory <a name="DataboxEdgeOrderShipmentHistory" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

const databoxEdgeOrderShipmentHistory: databoxEdgeOrder.DataboxEdgeOrderShipmentHistory = { ... }
```


### DataboxEdgeOrderShipmentTracking <a name="DataboxEdgeOrderShipmentTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

const databoxEdgeOrderShipmentTracking: databoxEdgeOrder.DataboxEdgeOrderShipmentTracking = { ... }
```


### DataboxEdgeOrderStatus <a name="DataboxEdgeOrderStatus" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

const databoxEdgeOrderStatus: databoxEdgeOrder.DataboxEdgeOrderStatus = { ... }
```


### DataboxEdgeOrderTimeouts <a name="DataboxEdgeOrderTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

const databoxEdgeOrderTimeouts: databoxEdgeOrder.DataboxEdgeOrderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#create DataboxEdgeOrder#create}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#delete DataboxEdgeOrder#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#read DataboxEdgeOrder#read}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#update DataboxEdgeOrder#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#create DataboxEdgeOrder#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#delete DataboxEdgeOrder#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#read DataboxEdgeOrder#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/databox_edge_order#update DataboxEdgeOrder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataboxEdgeOrderContactOutputReference <a name="DataboxEdgeOrderContactOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emailsInput">emailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emails">emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* string

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emailsInput"></a>

```typescript
public readonly emailsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataboxEdgeOrderContact;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---


### DataboxEdgeOrderReturnTrackingList <a name="DataboxEdgeOrderReturnTrackingList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get"></a>

```typescript
public get(index: number): DataboxEdgeOrderReturnTrackingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataboxEdgeOrderReturnTrackingOutputReference <a name="DataboxEdgeOrderReturnTrackingOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.carrierName">carrierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingId">trackingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingUrl">trackingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking">DataboxEdgeOrderReturnTracking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `carrierName`<sup>Required</sup> <a name="carrierName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.carrierName"></a>

```typescript
public readonly carrierName: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `trackingId`<sup>Required</sup> <a name="trackingId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingId"></a>

```typescript
public readonly trackingId: string;
```

- *Type:* string

---

##### `trackingUrl`<sup>Required</sup> <a name="trackingUrl" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingUrl"></a>

```typescript
public readonly trackingUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataboxEdgeOrderReturnTracking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking">DataboxEdgeOrderReturnTracking</a>

---


### DataboxEdgeOrderShipmentAddressOutputReference <a name="DataboxEdgeOrderShipmentAddressOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.addressInput">addressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.address">address</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string[];
```

- *Type:* string[]

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.address"></a>

```typescript
public readonly address: string[];
```

- *Type:* string[]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataboxEdgeOrderShipmentAddress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---


### DataboxEdgeOrderShipmentHistoryList <a name="DataboxEdgeOrderShipmentHistoryList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get"></a>

```typescript
public get(index: number): DataboxEdgeOrderShipmentHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataboxEdgeOrderShipmentHistoryOutputReference <a name="DataboxEdgeOrderShipmentHistoryOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.lastUpdate">lastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory">DataboxEdgeOrderShipmentHistory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.lastUpdate"></a>

```typescript
public readonly lastUpdate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataboxEdgeOrderShipmentHistory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory">DataboxEdgeOrderShipmentHistory</a>

---


### DataboxEdgeOrderShipmentTrackingList <a name="DataboxEdgeOrderShipmentTrackingList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get"></a>

```typescript
public get(index: number): DataboxEdgeOrderShipmentTrackingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataboxEdgeOrderShipmentTrackingOutputReference <a name="DataboxEdgeOrderShipmentTrackingOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.carrierName">carrierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingId">trackingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingUrl">trackingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking">DataboxEdgeOrderShipmentTracking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `carrierName`<sup>Required</sup> <a name="carrierName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.carrierName"></a>

```typescript
public readonly carrierName: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `trackingId`<sup>Required</sup> <a name="trackingId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingId"></a>

```typescript
public readonly trackingId: string;
```

- *Type:* string

---

##### `trackingUrl`<sup>Required</sup> <a name="trackingUrl" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingUrl"></a>

```typescript
public readonly trackingUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataboxEdgeOrderShipmentTracking;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking">DataboxEdgeOrderShipmentTracking</a>

---


### DataboxEdgeOrderStatusList <a name="DataboxEdgeOrderStatusList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get"></a>

```typescript
public get(index: number): DataboxEdgeOrderStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataboxEdgeOrderStatusOutputReference <a name="DataboxEdgeOrderStatusOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.info">info</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.lastUpdate">lastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus">DataboxEdgeOrderStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.info"></a>

```typescript
public readonly info: string;
```

- *Type:* string

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.lastUpdate"></a>

```typescript
public readonly lastUpdate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataboxEdgeOrderStatus;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus">DataboxEdgeOrderStatus</a>

---


### DataboxEdgeOrderTimeoutsOutputReference <a name="DataboxEdgeOrderTimeoutsOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer"></a>

```typescript
import { databoxEdgeOrder } from '@cdktf/provider-azurerm'

new databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataboxEdgeOrderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a>

---



