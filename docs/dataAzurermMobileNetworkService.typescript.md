# `data_azurerm_mobile_network_service`

Refer to the Terraform Registory for docs: [`data_azurerm_mobile_network_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service).

# `dataAzurermMobileNetworkService` Submodule <a name="`dataAzurermMobileNetworkService` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkService <a name="DataAzurermMobileNetworkService" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service azurerm_mobile_network_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkService(scope: Construct, id: string, config: DataAzurermMobileNetworkServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig">DataAzurermMobileNetworkServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig">DataAzurermMobileNetworkServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMobileNetworkServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts">DataAzurermMobileNetworkServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isConstruct"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isTerraformElement"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isTerraformDataSource"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.pccRule">pccRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList">DataAzurermMobileNetworkServicePccRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.servicePrecedence">servicePrecedence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.serviceQosPolicy">serviceQosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList">DataAzurermMobileNetworkServiceServiceQosPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference">DataAzurermMobileNetworkServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.mobileNetworkIdInput">mobileNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts">DataAzurermMobileNetworkServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.mobileNetworkId">mobileNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pccRule`<sup>Required</sup> <a name="pccRule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.pccRule"></a>

```typescript
public readonly pccRule: DataAzurermMobileNetworkServicePccRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList">DataAzurermMobileNetworkServicePccRuleList</a>

---

##### `servicePrecedence`<sup>Required</sup> <a name="servicePrecedence" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.servicePrecedence"></a>

```typescript
public readonly servicePrecedence: number;
```

- *Type:* number

---

##### `serviceQosPolicy`<sup>Required</sup> <a name="serviceQosPolicy" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.serviceQosPolicy"></a>

```typescript
public readonly serviceQosPolicy: DataAzurermMobileNetworkServiceServiceQosPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList">DataAzurermMobileNetworkServiceServiceQosPolicyList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference">DataAzurermMobileNetworkServiceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mobileNetworkIdInput`<sup>Optional</sup> <a name="mobileNetworkIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.mobileNetworkIdInput"></a>

```typescript
public readonly mobileNetworkIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMobileNetworkServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts">DataAzurermMobileNetworkServiceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.mobileNetworkId"></a>

```typescript
public readonly mobileNetworkId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkServiceConfig <a name="DataAzurermMobileNetworkServiceConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServiceConfig: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.mobileNetworkId">mobileNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#mobile_network_id DataAzurermMobileNetworkService#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#name DataAzurermMobileNetworkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#id DataAzurermMobileNetworkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts">DataAzurermMobileNetworkServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.mobileNetworkId"></a>

```typescript
public readonly mobileNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#mobile_network_id DataAzurermMobileNetworkService#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#name DataAzurermMobileNetworkService#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#id DataAzurermMobileNetworkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts">DataAzurermMobileNetworkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#timeouts DataAzurermMobileNetworkService#timeouts}

---

### DataAzurermMobileNetworkServicePccRule <a name="DataAzurermMobileNetworkServicePccRule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRule.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServicePccRule: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRule = { ... }
```


### DataAzurermMobileNetworkServicePccRuleQosPolicy <a name="DataAzurermMobileNetworkServicePccRuleQosPolicy" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicy.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServicePccRuleQosPolicy: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicy = { ... }
```


### DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate <a name="DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate = { ... }
```


### DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate <a name="DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate = { ... }
```


### DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate <a name="DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate = { ... }
```


### DataAzurermMobileNetworkServiceServiceQosPolicy <a name="DataAzurermMobileNetworkServiceServiceQosPolicy" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicy.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServiceServiceQosPolicy: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicy = { ... }
```


### DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate <a name="DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate = { ... }
```


### DataAzurermMobileNetworkServiceTimeouts <a name="DataAzurermMobileNetworkServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkServiceTimeouts: dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#read DataAzurermMobileNetworkService#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/mobile_network_service#read DataAzurermMobileNetworkService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkServicePccRuleList <a name="DataAzurermMobileNetworkServicePccRuleList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkServicePccRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkServicePccRuleOutputReference <a name="DataAzurermMobileNetworkServicePccRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.precedence">precedence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.qosPolicy">qosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList">DataAzurermMobileNetworkServicePccRuleQosPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplate">serviceDataFlowTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList">DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.trafficControlEnabled">trafficControlEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRule">DataAzurermMobileNetworkServicePccRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

---

##### `qosPolicy`<sup>Required</sup> <a name="qosPolicy" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.qosPolicy"></a>

```typescript
public readonly qosPolicy: DataAzurermMobileNetworkServicePccRuleQosPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList">DataAzurermMobileNetworkServicePccRuleQosPolicyList</a>

---

##### `serviceDataFlowTemplate`<sup>Required</sup> <a name="serviceDataFlowTemplate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplate"></a>

```typescript
public readonly serviceDataFlowTemplate: DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList">DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList</a>

---

##### `trafficControlEnabled`<sup>Required</sup> <a name="trafficControlEnabled" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.trafficControlEnabled"></a>

```typescript
public readonly trafficControlEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkServicePccRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRule">DataAzurermMobileNetworkServicePccRule</a>

---


### DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList <a name="DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference <a name="DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlink">downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplink">uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlink"></a>

```typescript
public readonly downlink: string;
```

- *Type:* string

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplink"></a>

```typescript
public readonly uplink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

---


### DataAzurermMobileNetworkServicePccRuleQosPolicyList <a name="DataAzurermMobileNetworkServicePccRuleQosPolicyList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList <a name="DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference <a name="DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlink">downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplink">uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate">DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlink"></a>

```typescript
public readonly downlink: string;
```

- *Type:* string

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplink"></a>

```typescript
public readonly uplink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate">DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

---


### DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference <a name="DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel">allocationAndRetentionPriorityLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRate">guaranteedBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList">DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRate">maximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList">DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapability">preemptionCapability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerability">preemptionVulnerability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicator">qosIndicator</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicy">DataAzurermMobileNetworkServicePccRuleQosPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="allocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```typescript
public readonly allocationAndRetentionPriorityLevel: number;
```

- *Type:* number

---

##### `guaranteedBitRate`<sup>Required</sup> <a name="guaranteedBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRate"></a>

```typescript
public readonly guaranteedBitRate: DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList">DataAzurermMobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList</a>

---

##### `maximumBitRate`<sup>Required</sup> <a name="maximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRate"></a>

```typescript
public readonly maximumBitRate: DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList">DataAzurermMobileNetworkServicePccRuleQosPolicyMaximumBitRateList</a>

---

##### `preemptionCapability`<sup>Required</sup> <a name="preemptionCapability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapability"></a>

```typescript
public readonly preemptionCapability: string;
```

- *Type:* string

---

##### `preemptionVulnerability`<sup>Required</sup> <a name="preemptionVulnerability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerability"></a>

```typescript
public readonly preemptionVulnerability: string;
```

- *Type:* string

---

##### `qosIndicator`<sup>Required</sup> <a name="qosIndicator" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicator"></a>

```typescript
public readonly qosIndicator: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkServicePccRuleQosPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleQosPolicy">DataAzurermMobileNetworkServicePccRuleQosPolicy</a>

---


### DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList <a name="DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference <a name="DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocol">protocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpList">remoteIpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate">DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string[];
```

- *Type:* string[]

---

##### `remoteIpList`<sup>Required</sup> <a name="remoteIpList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpList"></a>

```typescript
public readonly remoteIpList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate">DataAzurermMobileNetworkServicePccRuleServiceDataFlowTemplate</a>

---


### DataAzurermMobileNetworkServiceServiceQosPolicyList <a name="DataAzurermMobileNetworkServiceServiceQosPolicyList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList <a name="DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference <a name="DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlink">downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplink">uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate">DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlink"></a>

```typescript
public readonly downlink: string;
```

- *Type:* string

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplink"></a>

```typescript
public readonly uplink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate">DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

---


### DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference <a name="DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel">allocationAndRetentionPriorityLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRate">maximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList">DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapability">preemptionCapability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerability">preemptionVulnerability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicator">qosIndicator</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicy">DataAzurermMobileNetworkServiceServiceQosPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="allocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```typescript
public readonly allocationAndRetentionPriorityLevel: number;
```

- *Type:* number

---

##### `maximumBitRate`<sup>Required</sup> <a name="maximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRate"></a>

```typescript
public readonly maximumBitRate: DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList">DataAzurermMobileNetworkServiceServiceQosPolicyMaximumBitRateList</a>

---

##### `preemptionCapability`<sup>Required</sup> <a name="preemptionCapability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapability"></a>

```typescript
public readonly preemptionCapability: string;
```

- *Type:* string

---

##### `preemptionVulnerability`<sup>Required</sup> <a name="preemptionVulnerability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerability"></a>

```typescript
public readonly preemptionVulnerability: string;
```

- *Type:* string

---

##### `qosIndicator`<sup>Required</sup> <a name="qosIndicator" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicator"></a>

```typescript
public readonly qosIndicator: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkServiceServiceQosPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceServiceQosPolicy">DataAzurermMobileNetworkServiceServiceQosPolicy</a>

---


### DataAzurermMobileNetworkServiceTimeoutsOutputReference <a name="DataAzurermMobileNetworkServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkService } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts">DataAzurermMobileNetworkServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMobileNetworkServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkService.DataAzurermMobileNetworkServiceTimeouts">DataAzurermMobileNetworkServiceTimeouts</a>

---



