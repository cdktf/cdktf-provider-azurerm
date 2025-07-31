# `dataAzurermWindowsFunctionApp` Submodule <a name="`dataAzurermWindowsFunctionApp` Submodule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermWindowsFunctionApp <a name="DataAzurermWindowsFunctionApp" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app azurerm_windows_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp(scope: Construct, id: string, config: DataAzurermWindowsFunctionAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig">DataAzurermWindowsFunctionAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig">DataAzurermWindowsFunctionAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermWindowsFunctionAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermWindowsFunctionApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermWindowsFunctionApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermWindowsFunctionApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermWindowsFunctionApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermWindowsFunctionApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.appSettings">appSettings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettings">authSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList">DataAzurermWindowsFunctionAppAuthSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettingsV2">authSettingsV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List">DataAzurermWindowsFunctionAppAuthSettingsV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList">DataAzurermWindowsFunctionAppBackupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.builtinLoggingEnabled">builtinLoggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateExclusionPaths">clientCertificateExclusionPaths</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateMode">clientCertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList">DataAzurermWindowsFunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.contentShareForceDisabled">contentShareForceDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dailyMemoryTimeQuota">dailyMemoryTimeQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.defaultHostname">defaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.ftpPublishBasicAuthenticationEnabled">ftpPublishBasicAuthenticationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.functionsExtensionVersion">functionsExtensionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.hostingEnvironmentId">hostingEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.httpsOnly">httpsOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList">DataAzurermWindowsFunctionAppIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddressList">outboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddressList">possibleOutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.servicePlanId">servicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList">DataAzurermWindowsFunctionAppSiteConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList">DataAzurermWindowsFunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.stickySettings">stickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList">DataAzurermWindowsFunctionAppStickySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageKeyVaultSecretId">storageKeyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageUsesManagedIdentity">storageUsesManagedIdentity</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference">DataAzurermWindowsFunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.virtualNetworkBackupRestoreEnabled">virtualNetworkBackupRestoreEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.webdeployPublishBasicAuthenticationEnabled">webdeployPublishBasicAuthenticationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.appSettings"></a>

```typescript
public readonly appSettings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `authSettings`<sup>Required</sup> <a name="authSettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettings"></a>

```typescript
public readonly authSettings: DataAzurermWindowsFunctionAppAuthSettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList">DataAzurermWindowsFunctionAppAuthSettingsList</a>

---

##### `authSettingsV2`<sup>Required</sup> <a name="authSettingsV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettingsV2"></a>

```typescript
public readonly authSettingsV2: DataAzurermWindowsFunctionAppAuthSettingsV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List">DataAzurermWindowsFunctionAppAuthSettingsV2List</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.backup"></a>

```typescript
public readonly backup: DataAzurermWindowsFunctionAppBackupList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList">DataAzurermWindowsFunctionAppBackupList</a>

---

##### `builtinLoggingEnabled`<sup>Required</sup> <a name="builtinLoggingEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.builtinLoggingEnabled"></a>

```typescript
public readonly builtinLoggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientCertificateEnabled`<sup>Required</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateEnabled"></a>

```typescript
public readonly clientCertificateEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientCertificateExclusionPaths`<sup>Required</sup> <a name="clientCertificateExclusionPaths" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateExclusionPaths"></a>

```typescript
public readonly clientCertificateExclusionPaths: string;
```

- *Type:* string

---

##### `clientCertificateMode`<sup>Required</sup> <a name="clientCertificateMode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateMode"></a>

```typescript
public readonly clientCertificateMode: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.connectionString"></a>

```typescript
public readonly connectionString: DataAzurermWindowsFunctionAppConnectionStringList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList">DataAzurermWindowsFunctionAppConnectionStringList</a>

---

##### `contentShareForceDisabled`<sup>Required</sup> <a name="contentShareForceDisabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.contentShareForceDisabled"></a>

```typescript
public readonly contentShareForceDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.customDomainVerificationId"></a>

```typescript
public readonly customDomainVerificationId: string;
```

- *Type:* string

---

##### `dailyMemoryTimeQuota`<sup>Required</sup> <a name="dailyMemoryTimeQuota" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dailyMemoryTimeQuota"></a>

```typescript
public readonly dailyMemoryTimeQuota: number;
```

- *Type:* number

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.defaultHostname"></a>

```typescript
public readonly defaultHostname: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ftpPublishBasicAuthenticationEnabled`<sup>Required</sup> <a name="ftpPublishBasicAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.ftpPublishBasicAuthenticationEnabled"></a>

```typescript
public readonly ftpPublishBasicAuthenticationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `functionsExtensionVersion`<sup>Required</sup> <a name="functionsExtensionVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.functionsExtensionVersion"></a>

```typescript
public readonly functionsExtensionVersion: string;
```

- *Type:* string

---

##### `hostingEnvironmentId`<sup>Required</sup> <a name="hostingEnvironmentId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.hostingEnvironmentId"></a>

```typescript
public readonly hostingEnvironmentId: string;
```

- *Type:* string

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.identity"></a>

```typescript
public readonly identity: DataAzurermWindowsFunctionAppIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList">DataAzurermWindowsFunctionAppIdentityList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string;
```

- *Type:* string

---

##### `outboundIpAddressList`<sup>Required</sup> <a name="outboundIpAddressList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddressList"></a>

```typescript
public readonly outboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddresses"></a>

```typescript
public readonly possibleOutboundIpAddresses: string;
```

- *Type:* string

---

##### `possibleOutboundIpAddressList`<sup>Required</sup> <a name="possibleOutboundIpAddressList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddressList"></a>

```typescript
public readonly possibleOutboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `servicePlanId`<sup>Required</sup> <a name="servicePlanId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.servicePlanId"></a>

```typescript
public readonly servicePlanId: string;
```

- *Type:* string

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteConfig"></a>

```typescript
public readonly siteConfig: DataAzurermWindowsFunctionAppSiteConfigList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList">DataAzurermWindowsFunctionAppSiteConfigList</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteCredential"></a>

```typescript
public readonly siteCredential: DataAzurermWindowsFunctionAppSiteCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList">DataAzurermWindowsFunctionAppSiteCredentialList</a>

---

##### `stickySettings`<sup>Required</sup> <a name="stickySettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.stickySettings"></a>

```typescript
public readonly stickySettings: DataAzurermWindowsFunctionAppStickySettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList">DataAzurermWindowsFunctionAppStickySettingsList</a>

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `storageKeyVaultSecretId`<sup>Required</sup> <a name="storageKeyVaultSecretId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageKeyVaultSecretId"></a>

```typescript
public readonly storageKeyVaultSecretId: string;
```

- *Type:* string

---

##### `storageUsesManagedIdentity`<sup>Required</sup> <a name="storageUsesManagedIdentity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageUsesManagedIdentity"></a>

```typescript
public readonly storageUsesManagedIdentity: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermWindowsFunctionAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference">DataAzurermWindowsFunctionAppTimeoutsOutputReference</a>

---

##### `virtualNetworkBackupRestoreEnabled`<sup>Required</sup> <a name="virtualNetworkBackupRestoreEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.virtualNetworkBackupRestoreEnabled"></a>

```typescript
public readonly virtualNetworkBackupRestoreEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `webdeployPublishBasicAuthenticationEnabled`<sup>Required</sup> <a name="webdeployPublishBasicAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.webdeployPublishBasicAuthenticationEnabled"></a>

```typescript
public readonly webdeployPublishBasicAuthenticationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermWindowsFunctionAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermWindowsFunctionAppAuthSettings <a name="DataAzurermWindowsFunctionAppAuthSettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettings: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsActiveDirectory: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsFacebook <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsFacebook: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsGithub <a name="DataAzurermWindowsFunctionAppAuthSettingsGithub" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsGithub: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsGoogle <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsGoogle: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoft <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsMicrosoft: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsTwitter <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsTwitter: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2AppleV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2GithubV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2Login <a name="DataAzurermWindowsFunctionAppAuthSettingsV2Login" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2Login: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2 = { ... }
```


### DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2 = { ... }
```


### DataAzurermWindowsFunctionAppBackup <a name="DataAzurermWindowsFunctionAppBackup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppBackup: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup = { ... }
```


### DataAzurermWindowsFunctionAppBackupSchedule <a name="DataAzurermWindowsFunctionAppBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppBackupSchedule: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule = { ... }
```


### DataAzurermWindowsFunctionAppConfig <a name="DataAzurermWindowsFunctionAppConfig" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppConfig: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#name DataAzurermWindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#id DataAzurermWindowsFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#name DataAzurermWindowsFunctionApp#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#id DataAzurermWindowsFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermWindowsFunctionAppTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#timeouts DataAzurermWindowsFunctionApp#timeouts}

---

### DataAzurermWindowsFunctionAppConnectionString <a name="DataAzurermWindowsFunctionAppConnectionString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppConnectionString: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString = { ... }
```


### DataAzurermWindowsFunctionAppIdentity <a name="DataAzurermWindowsFunctionAppIdentity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppIdentity: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity = { ... }
```


### DataAzurermWindowsFunctionAppSiteConfig <a name="DataAzurermWindowsFunctionAppSiteConfig" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteConfig: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig = { ... }
```


### DataAzurermWindowsFunctionAppSiteConfigApplicationStack <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteConfigApplicationStack: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack = { ... }
```


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteConfigAppServiceLogs: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs = { ... }
```


### DataAzurermWindowsFunctionAppSiteConfigCors <a name="DataAzurermWindowsFunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteConfigCors: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors = { ... }
```


### DataAzurermWindowsFunctionAppSiteConfigIpRestriction <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteConfigIpRestriction: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction = { ... }
```


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders = { ... }
```


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteConfigScmIpRestriction: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction = { ... }
```


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders = { ... }
```


### DataAzurermWindowsFunctionAppSiteCredential <a name="DataAzurermWindowsFunctionAppSiteCredential" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppSiteCredential: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential = { ... }
```


### DataAzurermWindowsFunctionAppStickySettings <a name="DataAzurermWindowsFunctionAppStickySettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppStickySettings: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings = { ... }
```


### DataAzurermWindowsFunctionAppTimeouts <a name="DataAzurermWindowsFunctionAppTimeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

const dataAzurermWindowsFunctionAppTimeouts: dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#read DataAzurermWindowsFunctionApp#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/data-sources/windows_function_app#read DataAzurermWindowsFunctionApp#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsFacebookList <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebookList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName">appSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook">DataAzurermWindowsFunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `appSecretSettingName`<sup>Required</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```typescript
public readonly appSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsFacebook;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook">DataAzurermWindowsFunctionAppAuthSettingsFacebook</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsGithubList <a name="DataAzurermWindowsFunctionAppAuthSettingsGithubList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub">DataAzurermWindowsFunctionAppAuthSettingsGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsGithub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub">DataAzurermWindowsFunctionAppAuthSettingsGithub</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsGoogleList <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogleList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle">DataAzurermWindowsFunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsGoogle;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle">DataAzurermWindowsFunctionAppAuthSettingsGoogle</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsList <a name="DataAzurermWindowsFunctionAppAuthSettingsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft">DataAzurermWindowsFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```typescript
public readonly oauthScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsMicrosoft;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft">DataAzurermWindowsFunctionAppAuthSettingsMicrosoft</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters">additionalLoginParameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList">DataAzurermWindowsFunctionAppAuthSettingsFacebookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList">DataAzurermWindowsFunctionAppAuthSettingsGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList">DataAzurermWindowsFunctionAppAuthSettingsGoogleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList">DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">tokenRefreshExtensionHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList">DataAzurermWindowsFunctionAppAuthSettingsTwitterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings">DataAzurermWindowsFunctionAppAuthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList</a>

---

##### `additionalLoginParameters`<sup>Required</sup> <a name="additionalLoginParameters" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```typescript
public readonly additionalLoginParameters: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.facebook"></a>

```typescript
public readonly facebook: DataAzurermWindowsFunctionAppAuthSettingsFacebookList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList">DataAzurermWindowsFunctionAppAuthSettingsFacebookList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.github"></a>

```typescript
public readonly github: DataAzurermWindowsFunctionAppAuthSettingsGithubList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList">DataAzurermWindowsFunctionAppAuthSettingsGithubList</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.google"></a>

```typescript
public readonly google: DataAzurermWindowsFunctionAppAuthSettingsGoogleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList">DataAzurermWindowsFunctionAppAuthSettingsGoogleList</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```typescript
public readonly microsoft: DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList">DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList</a>

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `tokenRefreshExtensionHours`<sup>Required</sup> <a name="tokenRefreshExtensionHours" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```typescript
public readonly tokenRefreshExtensionHours: number;
```

- *Type:* number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.twitter"></a>

```typescript
public readonly twitter: DataAzurermWindowsFunctionAppAuthSettingsTwitterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList">DataAzurermWindowsFunctionAppAuthSettingsTwitterList</a>

---

##### `unauthenticatedClientAction`<sup>Required</sup> <a name="unauthenticatedClientAction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```typescript
public readonly unauthenticatedClientAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings">DataAzurermWindowsFunctionAppAuthSettings</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsTwitterList <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitterList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter">DataAzurermWindowsFunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `consumerSecretSettingName`<sup>Required</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```typescript
public readonly consumerSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsTwitter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter">DataAzurermWindowsFunctionAppAuthSettingsTwitter</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedApplications">allowedApplications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedGroups">allowedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedIdentities">allowedIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretCertificateThumbprint">clientSecretCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedClientApplications">jwtAllowedClientApplications</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedGroups">jwtAllowedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.loginParameters">loginParameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.tenantAuthEndpoint">tenantAuthEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.wwwAuthenticationDisabled">wwwAuthenticationDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2">DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedApplications`<sup>Required</sup> <a name="allowedApplications" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedApplications"></a>

```typescript
public readonly allowedApplications: string[];
```

- *Type:* string[]

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `allowedGroups`<sup>Required</sup> <a name="allowedGroups" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedGroups"></a>

```typescript
public readonly allowedGroups: string[];
```

- *Type:* string[]

---

##### `allowedIdentities`<sup>Required</sup> <a name="allowedIdentities" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedIdentities"></a>

```typescript
public readonly allowedIdentities: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretCertificateThumbprint`<sup>Required</sup> <a name="clientSecretCertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretCertificateThumbprint"></a>

```typescript
public readonly clientSecretCertificateThumbprint: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `jwtAllowedClientApplications`<sup>Required</sup> <a name="jwtAllowedClientApplications" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedClientApplications"></a>

```typescript
public readonly jwtAllowedClientApplications: string[];
```

- *Type:* string[]

---

##### `jwtAllowedGroups`<sup>Required</sup> <a name="jwtAllowedGroups" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedGroups"></a>

```typescript
public readonly jwtAllowedGroups: string[];
```

- *Type:* string[]

---

##### `loginParameters`<sup>Required</sup> <a name="loginParameters" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.loginParameters"></a>

```typescript
public readonly loginParameters: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tenantAuthEndpoint`<sup>Required</sup> <a name="tenantAuthEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.tenantAuthEndpoint"></a>

```typescript
public readonly tenantAuthEndpoint: string;
```

- *Type:* string

---

##### `wwwAuthenticationDisabled`<sup>Required</sup> <a name="wwwAuthenticationDisabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.wwwAuthenticationDisabled"></a>

```typescript
public readonly wwwAuthenticationDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2">DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2">DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2">DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2">DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2">DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.authorisationEndpoint">authorisationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.certificationUri">certificationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientCredentialMethod">clientCredentialMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.issuerEndpoint">issuerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.nameClaimType">nameClaimType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.openidConfigurationEndpoint">openidConfigurationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2">DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorisationEndpoint`<sup>Required</sup> <a name="authorisationEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.authorisationEndpoint"></a>

```typescript
public readonly authorisationEndpoint: string;
```

- *Type:* string

---

##### `certificationUri`<sup>Required</sup> <a name="certificationUri" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.certificationUri"></a>

```typescript
public readonly certificationUri: string;
```

- *Type:* string

---

##### `clientCredentialMethod`<sup>Required</sup> <a name="clientCredentialMethod" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientCredentialMethod"></a>

```typescript
public readonly clientCredentialMethod: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `issuerEndpoint`<sup>Required</sup> <a name="issuerEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.issuerEndpoint"></a>

```typescript
public readonly issuerEndpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameClaimType`<sup>Required</sup> <a name="nameClaimType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.nameClaimType"></a>

```typescript
public readonly nameClaimType: string;
```

- *Type:* string

---

##### `openidConfigurationEndpoint`<sup>Required</sup> <a name="openidConfigurationEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.openidConfigurationEndpoint"></a>

```typescript
public readonly openidConfigurationEndpoint: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2">DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appSecretSettingName">appSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.graphApiVersion">graphApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2">DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecretSettingName`<sup>Required</sup> <a name="appSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appSecretSettingName"></a>

```typescript
public readonly appSecretSettingName: string;
```

- *Type:* string

---

##### `graphApiVersion`<sup>Required</sup> <a name="graphApiVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.graphApiVersion"></a>

```typescript
public readonly graphApiVersion: string;
```

- *Type:* string

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2">DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2">DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2">DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2">DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2">DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2LoginList <a name="DataAzurermWindowsFunctionAppAuthSettingsV2LoginList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.allowedExternalRedirectUrls">allowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationConvention">cookieExpirationConvention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationTime">cookieExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.logoutEndpoint">logoutEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.nonceExpirationTime">nonceExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.preserveUrlFragmentsForLogins">preserveUrlFragmentsForLogins</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenRefreshExtensionTime">tokenRefreshExtensionTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreEnabled">tokenStoreEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStorePath">tokenStorePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreSasSettingName">tokenStoreSasSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.validateNonce">validateNonce</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login">DataAzurermWindowsFunctionAppAuthSettingsV2Login</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedExternalRedirectUrls`<sup>Required</sup> <a name="allowedExternalRedirectUrls" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.allowedExternalRedirectUrls"></a>

```typescript
public readonly allowedExternalRedirectUrls: string[];
```

- *Type:* string[]

---

##### `cookieExpirationConvention`<sup>Required</sup> <a name="cookieExpirationConvention" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationConvention"></a>

```typescript
public readonly cookieExpirationConvention: string;
```

- *Type:* string

---

##### `cookieExpirationTime`<sup>Required</sup> <a name="cookieExpirationTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationTime"></a>

```typescript
public readonly cookieExpirationTime: string;
```

- *Type:* string

---

##### `logoutEndpoint`<sup>Required</sup> <a name="logoutEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.logoutEndpoint"></a>

```typescript
public readonly logoutEndpoint: string;
```

- *Type:* string

---

##### `nonceExpirationTime`<sup>Required</sup> <a name="nonceExpirationTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.nonceExpirationTime"></a>

```typescript
public readonly nonceExpirationTime: string;
```

- *Type:* string

---

##### `preserveUrlFragmentsForLogins`<sup>Required</sup> <a name="preserveUrlFragmentsForLogins" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.preserveUrlFragmentsForLogins"></a>

```typescript
public readonly preserveUrlFragmentsForLogins: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tokenRefreshExtensionTime`<sup>Required</sup> <a name="tokenRefreshExtensionTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenRefreshExtensionTime"></a>

```typescript
public readonly tokenRefreshExtensionTime: number;
```

- *Type:* number

---

##### `tokenStoreEnabled`<sup>Required</sup> <a name="tokenStoreEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreEnabled"></a>

```typescript
public readonly tokenStoreEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tokenStorePath`<sup>Required</sup> <a name="tokenStorePath" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStorePath"></a>

```typescript
public readonly tokenStorePath: string;
```

- *Type:* string

---

##### `tokenStoreSasSettingName`<sup>Required</sup> <a name="tokenStoreSasSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreSasSettingName"></a>

```typescript
public readonly tokenStoreSasSettingName: string;
```

- *Type:* string

---

##### `validateNonce`<sup>Required</sup> <a name="validateNonce" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.validateNonce"></a>

```typescript
public readonly validateNonce: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2Login;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login">DataAzurermWindowsFunctionAppAuthSettingsV2Login</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientSecretSettingName">clientSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2">DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretSettingName`<sup>Required</sup> <a name="clientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientSecretSettingName"></a>

```typescript
public readonly clientSecretSettingName: string;
```

- *Type:* string

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2">DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.activeDirectoryV2">activeDirectoryV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List">DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.appleV2">appleV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List">DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.authEnabled">authEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.azureStaticWebAppV2">azureStaticWebAppV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List">DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.configFilePath">configFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.customOidcV2">customOidcV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List">DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.defaultProvider">defaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.excludedPaths">excludedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.facebookV2">facebookV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List">DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyConvention">forwardProxyConvention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomHostHeaderName">forwardProxyCustomHostHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomSchemeHeaderName">forwardProxyCustomSchemeHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.githubV2">githubV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List">DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.googleV2">googleV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List">DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.httpRouteApiPrefix">httpRouteApiPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.login">login</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList">DataAzurermWindowsFunctionAppAuthSettingsV2LoginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.microsoftV2">microsoftV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List">DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.requireAuthentication">requireAuthentication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.requireHttps">requireHttps</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.twitterV2">twitterV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List">DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.unauthenticatedAction">unauthenticatedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2">DataAzurermWindowsFunctionAppAuthSettingsV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryV2`<sup>Required</sup> <a name="activeDirectoryV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.activeDirectoryV2"></a>

```typescript
public readonly activeDirectoryV2: DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List">DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List</a>

---

##### `appleV2`<sup>Required</sup> <a name="appleV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.appleV2"></a>

```typescript
public readonly appleV2: DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List">DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List</a>

---

##### `authEnabled`<sup>Required</sup> <a name="authEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.authEnabled"></a>

```typescript
public readonly authEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `azureStaticWebAppV2`<sup>Required</sup> <a name="azureStaticWebAppV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.azureStaticWebAppV2"></a>

```typescript
public readonly azureStaticWebAppV2: DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List">DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List</a>

---

##### `configFilePath`<sup>Required</sup> <a name="configFilePath" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.configFilePath"></a>

```typescript
public readonly configFilePath: string;
```

- *Type:* string

---

##### `customOidcV2`<sup>Required</sup> <a name="customOidcV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.customOidcV2"></a>

```typescript
public readonly customOidcV2: DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List">DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List</a>

---

##### `defaultProvider`<sup>Required</sup> <a name="defaultProvider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.defaultProvider"></a>

```typescript
public readonly defaultProvider: string;
```

- *Type:* string

---

##### `excludedPaths`<sup>Required</sup> <a name="excludedPaths" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.excludedPaths"></a>

```typescript
public readonly excludedPaths: string[];
```

- *Type:* string[]

---

##### `facebookV2`<sup>Required</sup> <a name="facebookV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.facebookV2"></a>

```typescript
public readonly facebookV2: DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List">DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List</a>

---

##### `forwardProxyConvention`<sup>Required</sup> <a name="forwardProxyConvention" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyConvention"></a>

```typescript
public readonly forwardProxyConvention: string;
```

- *Type:* string

---

##### `forwardProxyCustomHostHeaderName`<sup>Required</sup> <a name="forwardProxyCustomHostHeaderName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomHostHeaderName"></a>

```typescript
public readonly forwardProxyCustomHostHeaderName: string;
```

- *Type:* string

---

##### `forwardProxyCustomSchemeHeaderName`<sup>Required</sup> <a name="forwardProxyCustomSchemeHeaderName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomSchemeHeaderName"></a>

```typescript
public readonly forwardProxyCustomSchemeHeaderName: string;
```

- *Type:* string

---

##### `githubV2`<sup>Required</sup> <a name="githubV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.githubV2"></a>

```typescript
public readonly githubV2: DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List">DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List</a>

---

##### `googleV2`<sup>Required</sup> <a name="googleV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.googleV2"></a>

```typescript
public readonly googleV2: DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List">DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List</a>

---

##### `httpRouteApiPrefix`<sup>Required</sup> <a name="httpRouteApiPrefix" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.httpRouteApiPrefix"></a>

```typescript
public readonly httpRouteApiPrefix: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.login"></a>

```typescript
public readonly login: DataAzurermWindowsFunctionAppAuthSettingsV2LoginList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList">DataAzurermWindowsFunctionAppAuthSettingsV2LoginList</a>

---

##### `microsoftV2`<sup>Required</sup> <a name="microsoftV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.microsoftV2"></a>

```typescript
public readonly microsoftV2: DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List">DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List</a>

---

##### `requireAuthentication`<sup>Required</sup> <a name="requireAuthentication" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.requireAuthentication"></a>

```typescript
public readonly requireAuthentication: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requireHttps`<sup>Required</sup> <a name="requireHttps" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.requireHttps"></a>

```typescript
public readonly requireHttps: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `twitterV2`<sup>Required</sup> <a name="twitterV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.twitterV2"></a>

```typescript
public readonly twitterV2: DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List">DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List</a>

---

##### `unauthenticatedAction`<sup>Required</sup> <a name="unauthenticatedAction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.unauthenticatedAction"></a>

```typescript
public readonly unauthenticatedAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2">DataAzurermWindowsFunctionAppAuthSettingsV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerSecretSettingName">consumerSecretSettingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2">DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecretSettingName`<sup>Required</sup> <a name="consumerSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerSecretSettingName"></a>

```typescript
public readonly consumerSecretSettingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2">DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2</a>

---


### DataAzurermWindowsFunctionAppBackupList <a name="DataAzurermWindowsFunctionAppBackupList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppBackupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppBackupOutputReference <a name="DataAzurermWindowsFunctionAppBackupOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList">DataAzurermWindowsFunctionAppBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.storageAccountUrl">storageAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup">DataAzurermWindowsFunctionAppBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataAzurermWindowsFunctionAppBackupScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList">DataAzurermWindowsFunctionAppBackupScheduleList</a>

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.storageAccountUrl"></a>

```typescript
public readonly storageAccountUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup">DataAzurermWindowsFunctionAppBackup</a>

---


### DataAzurermWindowsFunctionAppBackupScheduleList <a name="DataAzurermWindowsFunctionAppBackupScheduleList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppBackupScheduleOutputReference <a name="DataAzurermWindowsFunctionAppBackupScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval">frequencyInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit">frequencyUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup">keepAtLeastOneBackup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime">lastExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule">DataAzurermWindowsFunctionAppBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInterval`<sup>Required</sup> <a name="frequencyInterval" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval"></a>

```typescript
public readonly frequencyInterval: number;
```

- *Type:* number

---

##### `frequencyUnit`<sup>Required</sup> <a name="frequencyUnit" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit"></a>

```typescript
public readonly frequencyUnit: string;
```

- *Type:* string

---

##### `keepAtLeastOneBackup`<sup>Required</sup> <a name="keepAtLeastOneBackup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```typescript
public readonly keepAtLeastOneBackup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastExecutionTime`<sup>Required</sup> <a name="lastExecutionTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime"></a>

```typescript
public readonly lastExecutionTime: string;
```

- *Type:* string

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppBackupSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule">DataAzurermWindowsFunctionAppBackupSchedule</a>

---


### DataAzurermWindowsFunctionAppConnectionStringList <a name="DataAzurermWindowsFunctionAppConnectionStringList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppConnectionStringOutputReference <a name="DataAzurermWindowsFunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString">DataAzurermWindowsFunctionAppConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppConnectionString;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString">DataAzurermWindowsFunctionAppConnectionString</a>

---


### DataAzurermWindowsFunctionAppIdentityList <a name="DataAzurermWindowsFunctionAppIdentityList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppIdentityOutputReference <a name="DataAzurermWindowsFunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity">DataAzurermWindowsFunctionAppIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity">DataAzurermWindowsFunctionAppIdentity</a>

---


### DataAzurermWindowsFunctionAppSiteConfigApplicationStackList <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStackList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion">dotnetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion">powershellCoreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime">useCustomRuntime</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime">useDotnetIsolatedRuntime</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack">DataAzurermWindowsFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dotnetVersion`<sup>Required</sup> <a name="dotnetVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```typescript
public readonly dotnetVersion: string;
```

- *Type:* string

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `nodeVersion`<sup>Required</sup> <a name="nodeVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

---

##### `powershellCoreVersion`<sup>Required</sup> <a name="powershellCoreVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion"></a>

```typescript
public readonly powershellCoreVersion: string;
```

- *Type:* string

---

##### `useCustomRuntime`<sup>Required</sup> <a name="useCustomRuntime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime"></a>

```typescript
public readonly useCustomRuntime: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `useDotnetIsolatedRuntime`<sup>Required</sup> <a name="useDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime"></a>

```typescript
public readonly useDotnetIsolatedRuntime: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteConfigApplicationStack;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack">DataAzurermWindowsFunctionAppSiteConfigApplicationStack</a>

---


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb">diskQuotaMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskQuotaMb`<sup>Required</sup> <a name="diskQuotaMb" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb"></a>

```typescript
public readonly diskQuotaMb: number;
```

- *Type:* number

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs</a>

---


### DataAzurermWindowsFunctionAppSiteConfigCorsList <a name="DataAzurermWindowsFunctionAppSiteConfigCorsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors">DataAzurermWindowsFunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors">DataAzurermWindowsFunctionAppSiteConfigCors</a>

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders</a>

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction">DataAzurermWindowsFunctionAppSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteConfigIpRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction">DataAzurermWindowsFunctionAppSiteConfigIpRestriction</a>

---


### DataAzurermWindowsFunctionAppSiteConfigList <a name="DataAzurermWindowsFunctionAppSiteConfigList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteConfigOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl">apiDefinitionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId">apiManagementApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString">applicationInsightsConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey">applicationInsightsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationStack">applicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList">DataAzurermWindowsFunctionAppSiteConfigApplicationStackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit">appScaleLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs">appServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList">DataAzurermWindowsFunctionAppSiteConfigCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled">detailedErrorLoggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">elasticInstanceMinimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">healthCheckEvictionTimeInMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ipRestrictionDefaultAction">ipRestrictionDefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode">loadBalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">preWarmedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtimeScaleMonitoringEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmIpRestrictionDefaultAction">scmIpRestrictionDefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion">scmMinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker">use32BitWorker</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion">windowsFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig">DataAzurermWindowsFunctionAppSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `apiDefinitionUrl`<sup>Required</sup> <a name="apiDefinitionUrl" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```typescript
public readonly apiDefinitionUrl: string;
```

- *Type:* string

---

##### `apiManagementApiId`<sup>Required</sup> <a name="apiManagementApiId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId"></a>

```typescript
public readonly apiManagementApiId: string;
```

- *Type:* string

---

##### `appCommandLine`<sup>Required</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

---

##### `applicationInsightsConnectionString`<sup>Required</sup> <a name="applicationInsightsConnectionString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString"></a>

```typescript
public readonly applicationInsightsConnectionString: string;
```

- *Type:* string

---

##### `applicationInsightsKey`<sup>Required</sup> <a name="applicationInsightsKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey"></a>

```typescript
public readonly applicationInsightsKey: string;
```

- *Type:* string

---

##### `applicationStack`<sup>Required</sup> <a name="applicationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationStack"></a>

```typescript
public readonly applicationStack: DataAzurermWindowsFunctionAppSiteConfigApplicationStackList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList">DataAzurermWindowsFunctionAppSiteConfigApplicationStackList</a>

---

##### `appScaleLimit`<sup>Required</sup> <a name="appScaleLimit" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```typescript
public readonly appScaleLimit: number;
```

- *Type:* number

---

##### `appServiceLogs`<sup>Required</sup> <a name="appServiceLogs" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs"></a>

```typescript
public readonly appServiceLogs: DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.cors"></a>

```typescript
public readonly cors: DataAzurermWindowsFunctionAppSiteConfigCorsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList">DataAzurermWindowsFunctionAppSiteConfigCorsList</a>

---

##### `defaultDocuments`<sup>Required</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

---

##### `detailedErrorLoggingEnabled`<sup>Required</sup> <a name="detailedErrorLoggingEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```typescript
public readonly detailedErrorLoggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `elasticInstanceMinimum`<sup>Required</sup> <a name="elasticInstanceMinimum" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```typescript
public readonly elasticInstanceMinimum: number;
```

- *Type:* number

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

---

##### `healthCheckEvictionTimeInMin`<sup>Required</sup> <a name="healthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```typescript
public readonly healthCheckEvictionTimeInMin: number;
```

- *Type:* number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList</a>

---

##### `ipRestrictionDefaultAction`<sup>Required</sup> <a name="ipRestrictionDefaultAction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ipRestrictionDefaultAction"></a>

```typescript
public readonly ipRestrictionDefaultAction: string;
```

- *Type:* string

---

##### `loadBalancingMode`<sup>Required</sup> <a name="loadBalancingMode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode"></a>

```typescript
public readonly loadBalancingMode: string;
```

- *Type:* string

---

##### `managedPipelineMode`<sup>Required</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion"></a>

```typescript
public readonly minimumTlsVersion: string;
```

- *Type:* string

---

##### `preWarmedInstanceCount`<sup>Required</sup> <a name="preWarmedInstanceCount" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```typescript
public readonly preWarmedInstanceCount: number;
```

- *Type:* number

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `remoteDebuggingVersion`<sup>Required</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

---

##### `runtimeScaleMonitoringEnabled`<sup>Required</sup> <a name="runtimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```typescript
public readonly runtimeScaleMonitoringEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `scmIpRestrictionDefaultAction`<sup>Required</sup> <a name="scmIpRestrictionDefaultAction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmIpRestrictionDefaultAction"></a>

```typescript
public readonly scmIpRestrictionDefaultAction: string;
```

- *Type:* string

---

##### `scmMinimumTlsVersion`<sup>Required</sup> <a name="scmMinimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```typescript
public readonly scmMinimumTlsVersion: string;
```

- *Type:* string

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `use32BitWorker`<sup>Required</sup> <a name="use32BitWorker" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker"></a>

```typescript
public readonly use32BitWorker: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `windowsFxVersion`<sup>Required</sup> <a name="windowsFxVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion"></a>

```typescript
public readonly windowsFxVersion: string;
```

- *Type:* string

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig">DataAzurermWindowsFunctionAppSiteConfig</a>

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction">DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction">DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction</a>

---


### DataAzurermWindowsFunctionAppSiteCredentialList <a name="DataAzurermWindowsFunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppSiteCredentialOutputReference <a name="DataAzurermWindowsFunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential">DataAzurermWindowsFunctionAppSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppSiteCredential;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential">DataAzurermWindowsFunctionAppSiteCredential</a>

---


### DataAzurermWindowsFunctionAppStickySettingsList <a name="DataAzurermWindowsFunctionAppStickySettingsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get"></a>

```typescript
public get(index: number): DataAzurermWindowsFunctionAppStickySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermWindowsFunctionAppStickySettingsOutputReference <a name="DataAzurermWindowsFunctionAppStickySettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.appSettingNames">appSettingNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames">connectionStringNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings">DataAzurermWindowsFunctionAppStickySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSettingNames`<sup>Required</sup> <a name="appSettingNames" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.appSettingNames"></a>

```typescript
public readonly appSettingNames: string[];
```

- *Type:* string[]

---

##### `connectionStringNames`<sup>Required</sup> <a name="connectionStringNames" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames"></a>

```typescript
public readonly connectionStringNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermWindowsFunctionAppStickySettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings">DataAzurermWindowsFunctionAppStickySettings</a>

---


### DataAzurermWindowsFunctionAppTimeoutsOutputReference <a name="DataAzurermWindowsFunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermWindowsFunctionApp } from '@cdktf/provider-azurerm'

new dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermWindowsFunctionAppTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>

---



