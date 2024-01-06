# `dataAzurermStorageManagementPolicy` Submodule <a name="`dataAzurermStorageManagementPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageManagementPolicy <a name="DataAzurermStorageManagementPolicy" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy azurerm_storage_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy(scope: Construct, id: string, config: DataAzurermStorageManagementPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig">DataAzurermStorageManagementPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig">DataAzurermStorageManagementPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermStorageManagementPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermStorageManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isConstruct"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformElement"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformDataSource"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermStorageManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermStorageManagementPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermStorageManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList">DataAzurermStorageManagementPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference">DataAzurermStorageManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.rule"></a>

```typescript
public readonly rule: DataAzurermStorageManagementPolicyRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList">DataAzurermStorageManagementPolicyRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageManagementPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference">DataAzurermStorageManagementPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermStorageManagementPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageManagementPolicyConfig <a name="DataAzurermStorageManagementPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyConfig: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy#storage_account_id DataAzurermStorageManagementPolicy#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy#id DataAzurermStorageManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy#storage_account_id DataAzurermStorageManagementPolicy#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy#id DataAzurermStorageManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageManagementPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy#timeouts DataAzurermStorageManagementPolicy#timeouts}

---

### DataAzurermStorageManagementPolicyRule <a name="DataAzurermStorageManagementPolicyRule" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyRule: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule = { ... }
```


### DataAzurermStorageManagementPolicyRuleActions <a name="DataAzurermStorageManagementPolicyRuleActions" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyRuleActions: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions = { ... }
```


### DataAzurermStorageManagementPolicyRuleActionsBaseBlob <a name="DataAzurermStorageManagementPolicyRuleActionsBaseBlob" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyRuleActionsBaseBlob: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob = { ... }
```


### DataAzurermStorageManagementPolicyRuleActionsSnapshot <a name="DataAzurermStorageManagementPolicyRuleActionsSnapshot" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyRuleActionsSnapshot: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot = { ... }
```


### DataAzurermStorageManagementPolicyRuleActionsVersion <a name="DataAzurermStorageManagementPolicyRuleActionsVersion" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyRuleActionsVersion: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion = { ... }
```


### DataAzurermStorageManagementPolicyRuleFilters <a name="DataAzurermStorageManagementPolicyRuleFilters" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyRuleFilters: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters = { ... }
```


### DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag <a name="DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag = { ... }
```


### DataAzurermStorageManagementPolicyTimeouts <a name="DataAzurermStorageManagementPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermStorageManagementPolicyTimeouts: dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy#read DataAzurermStorageManagementPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_management_policy#read DataAzurermStorageManagementPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageManagementPolicyRuleActionsBaseBlobList <a name="DataAzurermStorageManagementPolicyRuleActionsBaseBlobList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.get"></a>

```typescript
public get(index: number): DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference <a name="DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabled">autoTierToHotFromCoolEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThan">deleteAfterDaysSinceCreationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThan">deleteAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThan">deleteAfterDaysSinceModificationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThan">tierToArchiveAfterDaysSinceCreationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan">tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThan">tierToArchiveAfterDaysSinceModificationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">tierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThan">tierToColdAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceModificationGreaterThan">tierToColdAfterDaysSinceModificationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThan">tierToCoolAfterDaysSinceCreationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan">tierToCoolAfterDaysSinceLastAccessTimeGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThan">tierToCoolAfterDaysSinceModificationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob">DataAzurermStorageManagementPolicyRuleActionsBaseBlob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoTierToHotFromCoolEnabled`<sup>Required</sup> <a name="autoTierToHotFromCoolEnabled" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.autoTierToHotFromCoolEnabled"></a>

```typescript
public readonly autoTierToHotFromCoolEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deleteAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="deleteAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```typescript
public readonly deleteAfterDaysSinceCreationGreaterThan: number;
```

- *Type:* number

---

##### `deleteAfterDaysSinceLastAccessTimeGreaterThan`<sup>Required</sup> <a name="deleteAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceLastAccessTimeGreaterThan"></a>

```typescript
public readonly deleteAfterDaysSinceLastAccessTimeGreaterThan: number;
```

- *Type:* number

---

##### `deleteAfterDaysSinceModificationGreaterThan`<sup>Required</sup> <a name="deleteAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.deleteAfterDaysSinceModificationGreaterThan"></a>

```typescript
public readonly deleteAfterDaysSinceModificationGreaterThan: number;
```

- *Type:* number

---

##### `tierToArchiveAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="tierToArchiveAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceCreationGreaterThan"></a>

```typescript
public readonly tierToArchiveAfterDaysSinceCreationGreaterThan: number;
```

- *Type:* number

---

##### `tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan`<sup>Required</sup> <a name="tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan"></a>

```typescript
public readonly tierToArchiveAfterDaysSinceLastAccessTimeGreaterThan: number;
```

- *Type:* number

---

##### `tierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Required</sup> <a name="tierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```typescript
public readonly tierToArchiveAfterDaysSinceLastTierChangeGreaterThan: number;
```

- *Type:* number

---

##### `tierToArchiveAfterDaysSinceModificationGreaterThan`<sup>Required</sup> <a name="tierToArchiveAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToArchiveAfterDaysSinceModificationGreaterThan"></a>

```typescript
public readonly tierToArchiveAfterDaysSinceModificationGreaterThan: number;
```

- *Type:* number

---

##### `tierToColdAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="tierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```typescript
public readonly tierToColdAfterDaysSinceCreationGreaterThan: number;
```

- *Type:* number

---

##### `tierToColdAfterDaysSinceLastAccessTimeGreaterThan`<sup>Required</sup> <a name="tierToColdAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceLastAccessTimeGreaterThan"></a>

```typescript
public readonly tierToColdAfterDaysSinceLastAccessTimeGreaterThan: number;
```

- *Type:* number

---

##### `tierToColdAfterDaysSinceModificationGreaterThan`<sup>Required</sup> <a name="tierToColdAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToColdAfterDaysSinceModificationGreaterThan"></a>

```typescript
public readonly tierToColdAfterDaysSinceModificationGreaterThan: number;
```

- *Type:* number

---

##### `tierToCoolAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="tierToCoolAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceCreationGreaterThan"></a>

```typescript
public readonly tierToCoolAfterDaysSinceCreationGreaterThan: number;
```

- *Type:* number

---

##### `tierToCoolAfterDaysSinceLastAccessTimeGreaterThan`<sup>Required</sup> <a name="tierToCoolAfterDaysSinceLastAccessTimeGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceLastAccessTimeGreaterThan"></a>

```typescript
public readonly tierToCoolAfterDaysSinceLastAccessTimeGreaterThan: number;
```

- *Type:* number

---

##### `tierToCoolAfterDaysSinceModificationGreaterThan`<sup>Required</sup> <a name="tierToCoolAfterDaysSinceModificationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.tierToCoolAfterDaysSinceModificationGreaterThan"></a>

```typescript
public readonly tierToCoolAfterDaysSinceModificationGreaterThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageManagementPolicyRuleActionsBaseBlob;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlob">DataAzurermStorageManagementPolicyRuleActionsBaseBlob</a>

---


### DataAzurermStorageManagementPolicyRuleActionsList <a name="DataAzurermStorageManagementPolicyRuleActionsList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.get"></a>

```typescript
public get(index: number): DataAzurermStorageManagementPolicyRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageManagementPolicyRuleActionsOutputReference <a name="DataAzurermStorageManagementPolicyRuleActionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.baseBlob">baseBlob</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList">DataAzurermStorageManagementPolicyRuleActionsBaseBlobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList">DataAzurermStorageManagementPolicyRuleActionsSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.version">version</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList">DataAzurermStorageManagementPolicyRuleActionsVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions">DataAzurermStorageManagementPolicyRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseBlob`<sup>Required</sup> <a name="baseBlob" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.baseBlob"></a>

```typescript
public readonly baseBlob: DataAzurermStorageManagementPolicyRuleActionsBaseBlobList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsBaseBlobList">DataAzurermStorageManagementPolicyRuleActionsBaseBlobList</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.snapshot"></a>

```typescript
public readonly snapshot: DataAzurermStorageManagementPolicyRuleActionsSnapshotList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList">DataAzurermStorageManagementPolicyRuleActionsSnapshotList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.version"></a>

```typescript
public readonly version: DataAzurermStorageManagementPolicyRuleActionsVersionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList">DataAzurermStorageManagementPolicyRuleActionsVersionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageManagementPolicyRuleActions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActions">DataAzurermStorageManagementPolicyRuleActions</a>

---


### DataAzurermStorageManagementPolicyRuleActionsSnapshotList <a name="DataAzurermStorageManagementPolicyRuleActionsSnapshotList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.get"></a>

```typescript
public get(index: number): DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference <a name="DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreation">changeTierToArchiveAfterDaysSinceCreation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreation">changeTierToCoolAfterDaysSinceCreation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThan">deleteAfterDaysSinceCreationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">tierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot">DataAzurermStorageManagementPolicyRuleActionsSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeTierToArchiveAfterDaysSinceCreation`<sup>Required</sup> <a name="changeTierToArchiveAfterDaysSinceCreation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```typescript
public readonly changeTierToArchiveAfterDaysSinceCreation: number;
```

- *Type:* number

---

##### `changeTierToCoolAfterDaysSinceCreation`<sup>Required</sup> <a name="changeTierToCoolAfterDaysSinceCreation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.changeTierToCoolAfterDaysSinceCreation"></a>

```typescript
public readonly changeTierToCoolAfterDaysSinceCreation: number;
```

- *Type:* number

---

##### `deleteAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="deleteAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.deleteAfterDaysSinceCreationGreaterThan"></a>

```typescript
public readonly deleteAfterDaysSinceCreationGreaterThan: number;
```

- *Type:* number

---

##### `tierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Required</sup> <a name="tierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```typescript
public readonly tierToArchiveAfterDaysSinceLastTierChangeGreaterThan: number;
```

- *Type:* number

---

##### `tierToColdAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="tierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```typescript
public readonly tierToColdAfterDaysSinceCreationGreaterThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageManagementPolicyRuleActionsSnapshot;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsSnapshot">DataAzurermStorageManagementPolicyRuleActionsSnapshot</a>

---


### DataAzurermStorageManagementPolicyRuleActionsVersionList <a name="DataAzurermStorageManagementPolicyRuleActionsVersionList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.get"></a>

```typescript
public get(index: number): DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference <a name="DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreation">changeTierToArchiveAfterDaysSinceCreation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreation">changeTierToCoolAfterDaysSinceCreation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreation">deleteAfterDaysSinceCreation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan">tierToArchiveAfterDaysSinceLastTierChangeGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan">tierToColdAfterDaysSinceCreationGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion">DataAzurermStorageManagementPolicyRuleActionsVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeTierToArchiveAfterDaysSinceCreation`<sup>Required</sup> <a name="changeTierToArchiveAfterDaysSinceCreation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToArchiveAfterDaysSinceCreation"></a>

```typescript
public readonly changeTierToArchiveAfterDaysSinceCreation: number;
```

- *Type:* number

---

##### `changeTierToCoolAfterDaysSinceCreation`<sup>Required</sup> <a name="changeTierToCoolAfterDaysSinceCreation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.changeTierToCoolAfterDaysSinceCreation"></a>

```typescript
public readonly changeTierToCoolAfterDaysSinceCreation: number;
```

- *Type:* number

---

##### `deleteAfterDaysSinceCreation`<sup>Required</sup> <a name="deleteAfterDaysSinceCreation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.deleteAfterDaysSinceCreation"></a>

```typescript
public readonly deleteAfterDaysSinceCreation: number;
```

- *Type:* number

---

##### `tierToArchiveAfterDaysSinceLastTierChangeGreaterThan`<sup>Required</sup> <a name="tierToArchiveAfterDaysSinceLastTierChangeGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.tierToArchiveAfterDaysSinceLastTierChangeGreaterThan"></a>

```typescript
public readonly tierToArchiveAfterDaysSinceLastTierChangeGreaterThan: number;
```

- *Type:* number

---

##### `tierToColdAfterDaysSinceCreationGreaterThan`<sup>Required</sup> <a name="tierToColdAfterDaysSinceCreationGreaterThan" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.tierToColdAfterDaysSinceCreationGreaterThan"></a>

```typescript
public readonly tierToColdAfterDaysSinceCreationGreaterThan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageManagementPolicyRuleActionsVersion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsVersion">DataAzurermStorageManagementPolicyRuleActionsVersion</a>

---


### DataAzurermStorageManagementPolicyRuleFiltersList <a name="DataAzurermStorageManagementPolicyRuleFiltersList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.get"></a>

```typescript
public get(index: number): DataAzurermStorageManagementPolicyRuleFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList <a name="DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get"></a>

```typescript
public get(index: number): DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference <a name="DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag">DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag">DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTag</a>

---


### DataAzurermStorageManagementPolicyRuleFiltersOutputReference <a name="DataAzurermStorageManagementPolicyRuleFiltersOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.blobTypes">blobTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTag">matchBlobIndexTag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList">DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters">DataAzurermStorageManagementPolicyRuleFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blobTypes`<sup>Required</sup> <a name="blobTypes" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.blobTypes"></a>

```typescript
public readonly blobTypes: string[];
```

- *Type:* string[]

---

##### `matchBlobIndexTag`<sup>Required</sup> <a name="matchBlobIndexTag" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.matchBlobIndexTag"></a>

```typescript
public readonly matchBlobIndexTag: DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList">DataAzurermStorageManagementPolicyRuleFiltersMatchBlobIndexTagList</a>

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageManagementPolicyRuleFilters;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFilters">DataAzurermStorageManagementPolicyRuleFilters</a>

---


### DataAzurermStorageManagementPolicyRuleList <a name="DataAzurermStorageManagementPolicyRuleList" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.get"></a>

```typescript
public get(index: number): DataAzurermStorageManagementPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStorageManagementPolicyRuleOutputReference <a name="DataAzurermStorageManagementPolicyRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList">DataAzurermStorageManagementPolicyRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList">DataAzurermStorageManagementPolicyRuleFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule">DataAzurermStorageManagementPolicyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.actions"></a>

```typescript
public readonly actions: DataAzurermStorageManagementPolicyRuleActionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleActionsList">DataAzurermStorageManagementPolicyRuleActionsList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.filters"></a>

```typescript
public readonly filters: DataAzurermStorageManagementPolicyRuleFiltersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleFiltersList">DataAzurermStorageManagementPolicyRuleFiltersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStorageManagementPolicyRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyRule">DataAzurermStorageManagementPolicyRule</a>

---


### DataAzurermStorageManagementPolicyTimeoutsOutputReference <a name="DataAzurermStorageManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermStorageManagementPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermStorageManagementPolicy.DataAzurermStorageManagementPolicyTimeouts">DataAzurermStorageManagementPolicyTimeouts</a>

---



