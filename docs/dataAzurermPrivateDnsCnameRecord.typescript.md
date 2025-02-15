# `dataAzurermPrivateDnsCnameRecord` Submodule <a name="`dataAzurermPrivateDnsCnameRecord` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsCnameRecord <a name="DataAzurermPrivateDnsCnameRecord" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record azurerm_private_dns_cname_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsCnameRecord } from '@cdktf/provider-azurerm'

new dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord(scope: Construct, id: string, config: DataAzurermPrivateDnsCnameRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig">DataAzurermPrivateDnsCnameRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig">DataAzurermPrivateDnsCnameRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPrivateDnsCnameRecordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsCnameRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isConstruct"></a>

```typescript
import { dataAzurermPrivateDnsCnameRecord } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformElement"></a>

```typescript
import { dataAzurermPrivateDnsCnameRecord } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformDataSource"></a>

```typescript
import { dataAzurermPrivateDnsCnameRecord } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport"></a>

```typescript
import { dataAzurermPrivateDnsCnameRecord } from '@cdktf/provider-azurerm'

dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsCnameRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPrivateDnsCnameRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPrivateDnsCnameRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsCnameRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.record">record</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference">DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.record"></a>

```typescript
public readonly record: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference">DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPrivateDnsCnameRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsCnameRecordConfig <a name="DataAzurermPrivateDnsCnameRecordConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsCnameRecord } from '@cdktf/provider-azurerm'

const dataAzurermPrivateDnsCnameRecordConfig: dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#name DataAzurermPrivateDnsCnameRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#resource_group_name DataAzurermPrivateDnsCnameRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.zoneName">zoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#zone_name DataAzurermPrivateDnsCnameRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#id DataAzurermPrivateDnsCnameRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#name DataAzurermPrivateDnsCnameRecord#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#resource_group_name DataAzurermPrivateDnsCnameRecord#resource_group_name}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#zone_name DataAzurermPrivateDnsCnameRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#id DataAzurermPrivateDnsCnameRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsCnameRecordTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#timeouts DataAzurermPrivateDnsCnameRecord#timeouts}

---

### DataAzurermPrivateDnsCnameRecordTimeouts <a name="DataAzurermPrivateDnsCnameRecordTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsCnameRecord } from '@cdktf/provider-azurerm'

const dataAzurermPrivateDnsCnameRecordTimeouts: dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#read DataAzurermPrivateDnsCnameRecord#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/data-sources/private_dns_cname_record#read DataAzurermPrivateDnsCnameRecord#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference <a name="DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsCnameRecord } from '@cdktf/provider-azurerm'

new dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPrivateDnsCnameRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsCnameRecord.DataAzurermPrivateDnsCnameRecordTimeouts">DataAzurermPrivateDnsCnameRecordTimeouts</a>

---



