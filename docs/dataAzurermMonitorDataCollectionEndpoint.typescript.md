# `dataAzurermMonitorDataCollectionEndpoint` Submodule <a name="`dataAzurermMonitorDataCollectionEndpoint` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorDataCollectionEndpoint <a name="DataAzurermMonitorDataCollectionEndpoint" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint azurerm_monitor_data_collection_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionEndpoint } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint(scope: Construct, id: string, config: DataAzurermMonitorDataCollectionEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig">DataAzurermMonitorDataCollectionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig">DataAzurermMonitorDataCollectionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMonitorDataCollectionEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts">DataAzurermMonitorDataCollectionEndpointTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorDataCollectionEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isConstruct"></a>

```typescript
import { dataAzurermMonitorDataCollectionEndpoint } from '@cdktf/provider-azurerm'

dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isTerraformElement"></a>

```typescript
import { dataAzurermMonitorDataCollectionEndpoint } from '@cdktf/provider-azurerm'

dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAzurermMonitorDataCollectionEndpoint } from '@cdktf/provider-azurerm'

dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.generateConfigForImport"></a>

```typescript
import { dataAzurermMonitorDataCollectionEndpoint } from '@cdktf/provider-azurerm'

dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMonitorDataCollectionEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMonitorDataCollectionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMonitorDataCollectionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorDataCollectionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.configurationAccessEndpoint">configurationAccessEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.immutableId">immutableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.logsIngestionEndpoint">logsIngestionEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference">DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts">DataAzurermMonitorDataCollectionEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configurationAccessEndpoint`<sup>Required</sup> <a name="configurationAccessEndpoint" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.configurationAccessEndpoint"></a>

```typescript
public readonly configurationAccessEndpoint: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `immutableId`<sup>Required</sup> <a name="immutableId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.immutableId"></a>

```typescript
public readonly immutableId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logsIngestionEndpoint`<sup>Required</sup> <a name="logsIngestionEndpoint" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.logsIngestionEndpoint"></a>

```typescript
public readonly logsIngestionEndpoint: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference">DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMonitorDataCollectionEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts">DataAzurermMonitorDataCollectionEndpointTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorDataCollectionEndpointConfig <a name="DataAzurermMonitorDataCollectionEndpointConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionEndpoint } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionEndpointConfig: dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#name DataAzurermMonitorDataCollectionEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#resource_group_name DataAzurermMonitorDataCollectionEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#id DataAzurermMonitorDataCollectionEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts">DataAzurermMonitorDataCollectionEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#name DataAzurermMonitorDataCollectionEndpoint#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#resource_group_name DataAzurermMonitorDataCollectionEndpoint#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#id DataAzurermMonitorDataCollectionEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorDataCollectionEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts">DataAzurermMonitorDataCollectionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#timeouts DataAzurermMonitorDataCollectionEndpoint#timeouts}

---

### DataAzurermMonitorDataCollectionEndpointTimeouts <a name="DataAzurermMonitorDataCollectionEndpointTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionEndpoint } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionEndpointTimeouts: dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#read DataAzurermMonitorDataCollectionEndpoint#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/data-sources/monitor_data_collection_endpoint#read DataAzurermMonitorDataCollectionEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference <a name="DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionEndpoint } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts">DataAzurermMonitorDataCollectionEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMonitorDataCollectionEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionEndpoint.DataAzurermMonitorDataCollectionEndpointTimeouts">DataAzurermMonitorDataCollectionEndpointTimeouts</a>

---



