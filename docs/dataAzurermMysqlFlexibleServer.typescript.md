# `dataAzurermMysqlFlexibleServer` Submodule <a name="`dataAzurermMysqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMysqlFlexibleServer <a name="DataAzurermMysqlFlexibleServer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server azurerm_mysql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer(scope: Construct, id: string, config: DataAzurermMysqlFlexibleServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig">DataAzurermMysqlFlexibleServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig">DataAzurermMysqlFlexibleServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMysqlFlexibleServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMysqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMysqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMysqlFlexibleServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMysqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMysqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.delegatedSubnetId">delegatedSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.highAvailability">highAvailability</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList">DataAzurermMysqlFlexibleServerHighAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList">DataAzurermMysqlFlexibleServerMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicaCapacity">replicaCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicationRole">replicationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList">DataAzurermMysqlFlexibleServerStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference">DataAzurermMysqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `backupRetentionDays`<sup>Required</sup> <a name="backupRetentionDays" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

---

##### `delegatedSubnetId`<sup>Required</sup> <a name="delegatedSubnetId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.delegatedSubnetId"></a>

```typescript
public readonly delegatedSubnetId: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `geoRedundantBackupEnabled`<sup>Required</sup> <a name="geoRedundantBackupEnabled" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `highAvailability`<sup>Required</sup> <a name="highAvailability" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.highAvailability"></a>

```typescript
public readonly highAvailability: DataAzurermMysqlFlexibleServerHighAvailabilityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList">DataAzurermMysqlFlexibleServerHighAvailabilityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataAzurermMysqlFlexibleServerMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList">DataAzurermMysqlFlexibleServerMaintenanceWindowList</a>

---

##### `privateDnsZoneId`<sup>Required</sup> <a name="privateDnsZoneId" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.privateDnsZoneId"></a>

```typescript
public readonly privateDnsZoneId: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `replicaCapacity`<sup>Required</sup> <a name="replicaCapacity" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicaCapacity"></a>

```typescript
public readonly replicaCapacity: number;
```

- *Type:* number

---

##### `replicationRole`<sup>Required</sup> <a name="replicationRole" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicationRole"></a>

```typescript
public readonly replicationRole: string;
```

- *Type:* string

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.storage"></a>

```typescript
public readonly storage: DataAzurermMysqlFlexibleServerStorageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList">DataAzurermMysqlFlexibleServerStorageList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMysqlFlexibleServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference">DataAzurermMysqlFlexibleServerTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMysqlFlexibleServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMysqlFlexibleServerConfig <a name="DataAzurermMysqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataAzurermMysqlFlexibleServerConfig: dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMysqlFlexibleServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#timeouts DataAzurermMysqlFlexibleServer#timeouts}

---

### DataAzurermMysqlFlexibleServerHighAvailability <a name="DataAzurermMysqlFlexibleServerHighAvailability" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataAzurermMysqlFlexibleServerHighAvailability: dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability = { ... }
```


### DataAzurermMysqlFlexibleServerMaintenanceWindow <a name="DataAzurermMysqlFlexibleServerMaintenanceWindow" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataAzurermMysqlFlexibleServerMaintenanceWindow: dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow = { ... }
```


### DataAzurermMysqlFlexibleServerStorage <a name="DataAzurermMysqlFlexibleServerStorage" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataAzurermMysqlFlexibleServerStorage: dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage = { ... }
```


### DataAzurermMysqlFlexibleServerTimeouts <a name="DataAzurermMysqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataAzurermMysqlFlexibleServerTimeouts: dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#read DataAzurermMysqlFlexibleServer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/mysql_flexible_server#read DataAzurermMysqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMysqlFlexibleServerHighAvailabilityList <a name="DataAzurermMysqlFlexibleServerHighAvailabilityList" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get"></a>

```typescript
public get(index: number): DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference <a name="DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone">standbyAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability">DataAzurermMysqlFlexibleServerHighAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `standbyAvailabilityZone`<sup>Required</sup> <a name="standbyAvailabilityZone" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone"></a>

```typescript
public readonly standbyAvailabilityZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMysqlFlexibleServerHighAvailability;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability">DataAzurermMysqlFlexibleServerHighAvailability</a>

---


### DataAzurermMysqlFlexibleServerMaintenanceWindowList <a name="DataAzurermMysqlFlexibleServerMaintenanceWindowList" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference <a name="DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute">startMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow">DataAzurermMysqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

---

##### `startMinute`<sup>Required</sup> <a name="startMinute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute"></a>

```typescript
public readonly startMinute: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMysqlFlexibleServerMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow">DataAzurermMysqlFlexibleServerMaintenanceWindow</a>

---


### DataAzurermMysqlFlexibleServerStorageList <a name="DataAzurermMysqlFlexibleServerStorageList" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get"></a>

```typescript
public get(index: number): DataAzurermMysqlFlexibleServerStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMysqlFlexibleServerStorageOutputReference <a name="DataAzurermMysqlFlexibleServerStorageOutputReference" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.autoGrowEnabled">autoGrowEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.ioScalingEnabled">ioScalingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage">DataAzurermMysqlFlexibleServerStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoGrowEnabled`<sup>Required</sup> <a name="autoGrowEnabled" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.autoGrowEnabled"></a>

```typescript
public readonly autoGrowEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `ioScalingEnabled`<sup>Required</sup> <a name="ioScalingEnabled" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.ioScalingEnabled"></a>

```typescript
public readonly ioScalingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMysqlFlexibleServerStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage">DataAzurermMysqlFlexibleServerStorage</a>

---


### DataAzurermMysqlFlexibleServerTimeoutsOutputReference <a name="DataAzurermMysqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMysqlFlexibleServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

---



