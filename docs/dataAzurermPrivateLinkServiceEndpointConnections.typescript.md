# `data_azurerm_private_link_service_endpoint_connections`

Refer to the Terraform Registory for docs: [`data_azurerm_private_link_service_endpoint_connections`](https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections).

# `dataAzurermPrivateLinkServiceEndpointConnections` Submodule <a name="`dataAzurermPrivateLinkServiceEndpointConnections` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateLinkServiceEndpointConnections <a name="DataAzurermPrivateLinkServiceEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections azurerm_private_link_service_endpoint_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

new dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections(scope: Construct, id: string, config: DataAzurermPrivateLinkServiceEndpointConnectionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig">DataAzurermPrivateLinkServiceEndpointConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig">DataAzurermPrivateLinkServiceEndpointConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.privateEndpointConnections">privateEndpointConnections</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference">DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `privateEndpointConnections`<sup>Required</sup> <a name="privateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.privateEndpointConnections"></a>

```typescript
public readonly privateEndpointConnections: DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference">DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnections.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateLinkServiceEndpointConnectionsConfig <a name="DataAzurermPrivateLinkServiceEndpointConnectionsConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.Initializer"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

const dataAzurermPrivateLinkServiceEndpointConnectionsConfig: dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#id DataAzurermPrivateLinkServiceEndpointConnections#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#id DataAzurermPrivateLinkServiceEndpointConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#timeouts DataAzurermPrivateLinkServiceEndpointConnections#timeouts}

---

### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections.Initializer"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

const dataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections: dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections = { ... }
```


### DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts <a name="DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.Initializer"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

const dataAzurermPrivateLinkServiceEndpointConnectionsTimeouts: dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#read DataAzurermPrivateLinkServiceEndpointConnections#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/data-sources/private_link_service_endpoint_connections#read DataAzurermPrivateLinkServiceEndpointConnections#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

new dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get"></a>

```typescript
public get(index: number): DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference <a name="DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

new dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.actionRequired">actionRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointName">privateEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionRequired`<sup>Required</sup> <a name="actionRequired" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.actionRequired"></a>

```typescript
public readonly actionRequired: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `privateEndpointName`<sup>Required</sup> <a name="privateEndpointName" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.privateEndpointName"></a>

```typescript
public readonly privateEndpointName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections">DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections</a>

---


### DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference <a name="DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateLinkServiceEndpointConnections } from '@cdktf/provider-azurerm'

new dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateLinkServiceEndpointConnections.DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts">DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts</a> | cdktf.IResolvable

---



