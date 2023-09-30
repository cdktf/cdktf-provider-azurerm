# `data_azurerm_databricks_workspace_private_endpoint_connection`

Refer to the Terraform Registory for docs: [`data_azurerm_databricks_workspace_private_endpoint_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection).

# `dataAzurermDatabricksWorkspacePrivateEndpointConnection` Submodule <a name="`dataAzurermDatabricksWorkspacePrivateEndpointConnection` Submodule" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnection <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnection" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection azurerm_databricks_workspace_private_endpoint_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

new dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection(scope: Construct, id: string, config: DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.connections"></a>

```typescript
public readonly connections: DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointIdInput"></a>

```typescript
public readonly privateEndpointIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.Initializer"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

const dataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig: dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#id DataAzurermDatabricksWorkspacePrivateEndpointConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#private_endpoint_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#private_endpoint_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#workspace_id DataAzurermDatabricksWorkspacePrivateEndpointConnection#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#id DataAzurermDatabricksWorkspacePrivateEndpointConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#timeouts DataAzurermDatabricksWorkspacePrivateEndpointConnection#timeouts}

---

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections.Initializer"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

const dataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections: dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections = { ... }
```


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.Initializer"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

const dataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts: dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#read DataAzurermDatabricksWorkspacePrivateEndpointConnection#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/databricks_workspace_private_endpoint_connection#read DataAzurermDatabricksWorkspacePrivateEndpointConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

new dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get"></a>

```typescript
public get(index: number): DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

new dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.actionRequired">actionRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.workspacePrivateEndpointId">workspacePrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionRequired`<sup>Required</sup> <a name="actionRequired" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.actionRequired"></a>

```typescript
public readonly actionRequired: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `workspacePrivateEndpointId`<sup>Required</sup> <a name="workspacePrivateEndpointId" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.workspacePrivateEndpointId"></a>

```typescript
public readonly workspacePrivateEndpointId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections">DataAzurermDatabricksWorkspacePrivateEndpointConnectionConnections</a>

---


### DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference <a name="DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDatabricksWorkspacePrivateEndpointConnection } from '@cdktf/provider-azurerm'

new dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDatabricksWorkspacePrivateEndpointConnection.DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts">DataAzurermDatabricksWorkspacePrivateEndpointConnectionTimeouts</a>

---



