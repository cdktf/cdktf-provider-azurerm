# `dataAzurermNetappAccountEncryption` Submodule <a name="`dataAzurermNetappAccountEncryption` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappAccountEncryption <a name="DataAzurermNetappAccountEncryption" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption azurerm_netapp_account_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer"></a>

```typescript
import { dataAzurermNetappAccountEncryption } from '@cdktf/provider-azurerm'

new dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption(scope: Construct, id: string, config: DataAzurermNetappAccountEncryptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig">DataAzurermNetappAccountEncryptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig">DataAzurermNetappAccountEncryptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetSystemAssignedIdentityPrincipalId">resetSystemAssignedIdentityPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermNetappAccountEncryptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>

---

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSystemAssignedIdentityPrincipalId` <a name="resetSystemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetSystemAssignedIdentityPrincipalId"></a>

```typescript
public resetSystemAssignedIdentityPrincipalId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermNetappAccountEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isConstruct"></a>

```typescript
import { dataAzurermNetappAccountEncryption } from '@cdktf/provider-azurerm'

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformElement"></a>

```typescript
import { dataAzurermNetappAccountEncryption } from '@cdktf/provider-azurerm'

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformDataSource"></a>

```typescript
import { dataAzurermNetappAccountEncryption } from '@cdktf/provider-azurerm'

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport"></a>

```typescript
import { dataAzurermNetappAccountEncryption } from '@cdktf/provider-azurerm'

dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermNetappAccountEncryption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNetappAccountEncryption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNetappAccountEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappAccountEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference">DataAzurermNetappAccountEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.netappAccountIdInput">netappAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput">systemAssignedIdentityPrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.netappAccountId">netappAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.systemAssignedIdentityPrincipalId">systemAssignedIdentityPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetappAccountEncryptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference">DataAzurermNetappAccountEncryptionTimeoutsOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `netappAccountIdInput`<sup>Optional</sup> <a name="netappAccountIdInput" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.netappAccountIdInput"></a>

```typescript
public readonly netappAccountIdInput: string;
```

- *Type:* string

---

##### `systemAssignedIdentityPrincipalIdInput`<sup>Optional</sup> <a name="systemAssignedIdentityPrincipalIdInput" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.systemAssignedIdentityPrincipalIdInput"></a>

```typescript
public readonly systemAssignedIdentityPrincipalIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermNetappAccountEncryptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `netappAccountId`<sup>Required</sup> <a name="netappAccountId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.netappAccountId"></a>

```typescript
public readonly netappAccountId: string;
```

- *Type:* string

---

##### `systemAssignedIdentityPrincipalId`<sup>Required</sup> <a name="systemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.systemAssignedIdentityPrincipalId"></a>

```typescript
public readonly systemAssignedIdentityPrincipalId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryption.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappAccountEncryptionConfig <a name="DataAzurermNetappAccountEncryptionConfig" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.Initializer"></a>

```typescript
import { dataAzurermNetappAccountEncryption } from '@cdktf/provider-azurerm'

const dataAzurermNetappAccountEncryptionConfig: dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.netappAccountId">netappAccountId</a></code> | <code>string</code> | The ID of the NetApp Account where encryption will be set. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | The versionless encryption key url. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#id DataAzurermNetappAccountEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId">systemAssignedIdentityPrincipalId</a></code> | <code>string</code> | The Principal ID of the System Assigned Identity to use for encryption. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | The resource ID of the User Assigned Identity to use for encryption. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `netappAccountId`<sup>Required</sup> <a name="netappAccountId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.netappAccountId"></a>

```typescript
public readonly netappAccountId: string;
```

- *Type:* string

The ID of the NetApp Account where encryption will be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#netapp_account_id DataAzurermNetappAccountEncryption#netapp_account_id}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

The versionless encryption key url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#encryption_key DataAzurermNetappAccountEncryption#encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#id DataAzurermNetappAccountEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `systemAssignedIdentityPrincipalId`<sup>Optional</sup> <a name="systemAssignedIdentityPrincipalId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.systemAssignedIdentityPrincipalId"></a>

```typescript
public readonly systemAssignedIdentityPrincipalId: string;
```

- *Type:* string

The Principal ID of the System Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#system_assigned_identity_principal_id DataAzurermNetappAccountEncryption#system_assigned_identity_principal_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetappAccountEncryptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#timeouts DataAzurermNetappAccountEncryption#timeouts}

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionConfig.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

The resource ID of the User Assigned Identity to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#user_assigned_identity_id DataAzurermNetappAccountEncryption#user_assigned_identity_id}

---

### DataAzurermNetappAccountEncryptionTimeouts <a name="DataAzurermNetappAccountEncryptionTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts.Initializer"></a>

```typescript
import { dataAzurermNetappAccountEncryption } from '@cdktf/provider-azurerm'

const dataAzurermNetappAccountEncryptionTimeouts: dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#read DataAzurermNetappAccountEncryption#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/netapp_account_encryption#read DataAzurermNetappAccountEncryption#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappAccountEncryptionTimeoutsOutputReference <a name="DataAzurermNetappAccountEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetappAccountEncryption } from '@cdktf/provider-azurerm'

new dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermNetappAccountEncryptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermNetappAccountEncryption.DataAzurermNetappAccountEncryptionTimeouts">DataAzurermNetappAccountEncryptionTimeouts</a>

---



