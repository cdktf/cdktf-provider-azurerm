# `dataAzurermPostgresqlServer` Submodule <a name="`dataAzurermPostgresqlServer` Submodule" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPostgresqlServer <a name="DataAzurermPostgresqlServer" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server azurerm_postgresql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.Initializer"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

new dataAzurermPostgresqlServer.DataAzurermPostgresqlServer(scope: Construct, id: string, config: DataAzurermPostgresqlServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig">DataAzurermPostgresqlServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig">DataAzurermPostgresqlServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPostgresqlServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts">DataAzurermPostgresqlServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPostgresqlServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isConstruct"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isTerraformElement"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isTerraformDataSource"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.generateConfigForImport"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermPostgresqlServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPostgresqlServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPostgresqlServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPostgresqlServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList">DataAzurermPostgresqlServerIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference">DataAzurermPostgresqlServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts">DataAzurermPostgresqlServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.identity"></a>

```typescript
public readonly identity: DataAzurermPostgresqlServerIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList">DataAzurermPostgresqlServerIdentityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPostgresqlServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference">DataAzurermPostgresqlServerTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPostgresqlServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts">DataAzurermPostgresqlServerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPostgresqlServerConfig <a name="DataAzurermPostgresqlServerConfig" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.Initializer"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

const dataAzurermPostgresqlServerConfig: dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#name DataAzurermPostgresqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#resource_group_name DataAzurermPostgresqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#id DataAzurermPostgresqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts">DataAzurermPostgresqlServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#name DataAzurermPostgresqlServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#resource_group_name DataAzurermPostgresqlServer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#id DataAzurermPostgresqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPostgresqlServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts">DataAzurermPostgresqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#timeouts DataAzurermPostgresqlServer#timeouts}

---

### DataAzurermPostgresqlServerIdentity <a name="DataAzurermPostgresqlServerIdentity" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentity.Initializer"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

const dataAzurermPostgresqlServerIdentity: dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentity = { ... }
```


### DataAzurermPostgresqlServerTimeouts <a name="DataAzurermPostgresqlServerTimeouts" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts.Initializer"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

const dataAzurermPostgresqlServerTimeouts: dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#read DataAzurermPostgresqlServer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/postgresql_server#read DataAzurermPostgresqlServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPostgresqlServerIdentityList <a name="DataAzurermPostgresqlServerIdentityList" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.Initializer"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

new dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermPostgresqlServerIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermPostgresqlServerIdentityOutputReference <a name="DataAzurermPostgresqlServerIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

new dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentity">DataAzurermPostgresqlServerIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermPostgresqlServerIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerIdentity">DataAzurermPostgresqlServerIdentity</a>

---


### DataAzurermPostgresqlServerTimeoutsOutputReference <a name="DataAzurermPostgresqlServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPostgresqlServer } from '@cdktf/provider-azurerm'

new dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts">DataAzurermPostgresqlServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPostgresqlServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPostgresqlServer.DataAzurermPostgresqlServerTimeouts">DataAzurermPostgresqlServerTimeouts</a>

---



