# `dataAzurermLbBackendAddressPool` Submodule <a name="`dataAzurermLbBackendAddressPool` Submodule" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLbBackendAddressPool <a name="DataAzurermLbBackendAddressPool" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool azurerm_lb_backend_address_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

new dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool(scope: Construct, id: string, config: DataAzurermLbBackendAddressPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig">DataAzurermLbBackendAddressPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig">DataAzurermLbBackendAddressPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermLbBackendAddressPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermLbBackendAddressPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.generateConfigForImport"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermLbBackendAddressPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermLbBackendAddressPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermLbBackendAddressPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermLbBackendAddressPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendAddress">backendAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList">DataAzurermLbBackendAddressPoolBackendAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendIpConfigurations">backendIpConfigurations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList">DataAzurermLbBackendAddressPoolBackendIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.inboundNatRules">inboundNatRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadBalancingRules">loadBalancingRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.outboundRules">outboundRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference">DataAzurermLbBackendAddressPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerId">loadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `backendAddress`<sup>Required</sup> <a name="backendAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendAddress"></a>

```typescript
public readonly backendAddress: DataAzurermLbBackendAddressPoolBackendAddressList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList">DataAzurermLbBackendAddressPoolBackendAddressList</a>

---

##### `backendIpConfigurations`<sup>Required</sup> <a name="backendIpConfigurations" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.backendIpConfigurations"></a>

```typescript
public readonly backendIpConfigurations: DataAzurermLbBackendAddressPoolBackendIpConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList">DataAzurermLbBackendAddressPoolBackendIpConfigurationsList</a>

---

##### `inboundNatRules`<sup>Required</sup> <a name="inboundNatRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.inboundNatRules"></a>

```typescript
public readonly inboundNatRules: string[];
```

- *Type:* string[]

---

##### `loadBalancingRules`<sup>Required</sup> <a name="loadBalancingRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadBalancingRules"></a>

```typescript
public readonly loadBalancingRules: string[];
```

- *Type:* string[]

---

##### `outboundRules`<sup>Required</sup> <a name="outboundRules" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.outboundRules"></a>

```typescript
public readonly outboundRules: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermLbBackendAddressPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference">DataAzurermLbBackendAddressPoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerIdInput"></a>

```typescript
public readonly loadbalancerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermLbBackendAddressPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.loadbalancerId"></a>

```typescript
public readonly loadbalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLbBackendAddressPoolBackendAddress <a name="DataAzurermLbBackendAddressPoolBackendAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

const dataAzurermLbBackendAddressPoolBackendAddress: dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress = { ... }
```


### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

const dataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping: dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping = { ... }
```


### DataAzurermLbBackendAddressPoolBackendIpConfigurations <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurations" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

const dataAzurermLbBackendAddressPoolBackendIpConfigurations: dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations = { ... }
```


### DataAzurermLbBackendAddressPoolConfig <a name="DataAzurermLbBackendAddressPoolConfig" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

const dataAzurermLbBackendAddressPoolConfig: dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.loadbalancerId">loadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#name DataAzurermLbBackendAddressPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#id DataAzurermLbBackendAddressPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.loadbalancerId"></a>

```typescript
public readonly loadbalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#loadbalancer_id DataAzurermLbBackendAddressPool#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#name DataAzurermLbBackendAddressPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#id DataAzurermLbBackendAddressPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermLbBackendAddressPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#timeouts DataAzurermLbBackendAddressPool#timeouts}

---

### DataAzurermLbBackendAddressPoolTimeouts <a name="DataAzurermLbBackendAddressPoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

const dataAzurermLbBackendAddressPoolTimeouts: dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#read DataAzurermLbBackendAddressPool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/data-sources/lb_backend_address_pool#read DataAzurermLbBackendAddressPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

new dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get"></a>

```typescript
public get(index: number): DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference <a name="DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

new dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.frontendPort">frontendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName">inboundNatRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.frontendPort"></a>

```typescript
public readonly frontendPort: number;
```

- *Type:* number

---

##### `inboundNatRuleName`<sup>Required</sup> <a name="inboundNatRuleName" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName"></a>

```typescript
public readonly inboundNatRuleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMapping</a>

---


### DataAzurermLbBackendAddressPoolBackendAddressList <a name="DataAzurermLbBackendAddressPoolBackendAddressList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

new dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get"></a>

```typescript
public get(index: number): DataAzurermLbBackendAddressPoolBackendAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermLbBackendAddressPoolBackendAddressOutputReference <a name="DataAzurermLbBackendAddressPoolBackendAddressOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

new dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.inboundNatRulePortMapping">inboundNatRulePortMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress">DataAzurermLbBackendAddressPoolBackendAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inboundNatRulePortMapping`<sup>Required</sup> <a name="inboundNatRulePortMapping" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.inboundNatRulePortMapping"></a>

```typescript
public readonly inboundNatRulePortMapping: DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList">DataAzurermLbBackendAddressPoolBackendAddressInboundNatRulePortMappingList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermLbBackendAddressPoolBackendAddress;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendAddress">DataAzurermLbBackendAddressPoolBackendAddress</a>

---


### DataAzurermLbBackendAddressPoolBackendIpConfigurationsList <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurationsList" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

new dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get"></a>

```typescript
public get(index: number): DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference <a name="DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

new dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations">DataAzurermLbBackendAddressPoolBackendIpConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermLbBackendAddressPoolBackendIpConfigurations;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolBackendIpConfigurations">DataAzurermLbBackendAddressPoolBackendIpConfigurations</a>

---


### DataAzurermLbBackendAddressPoolTimeoutsOutputReference <a name="DataAzurermLbBackendAddressPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermLbBackendAddressPool } from '@cdktf/provider-azurerm'

new dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermLbBackendAddressPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermLbBackendAddressPool.DataAzurermLbBackendAddressPoolTimeouts">DataAzurermLbBackendAddressPoolTimeouts</a>

---



