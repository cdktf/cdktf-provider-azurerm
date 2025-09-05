# `dataAzurermDnsPtrRecord` Submodule <a name="`dataAzurermDnsPtrRecord` Submodule" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDnsPtrRecord <a name="DataAzurermDnsPtrRecord" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record azurerm_dns_ptr_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.Initializer"></a>

```typescript
import { dataAzurermDnsPtrRecord } from '@cdktf/provider-azurerm'

new dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord(scope: Construct, id: string, config: DataAzurermDnsPtrRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig">DataAzurermDnsPtrRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig">DataAzurermDnsPtrRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermDnsPtrRecordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts">DataAzurermDnsPtrRecordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDnsPtrRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isConstruct"></a>

```typescript
import { dataAzurermDnsPtrRecord } from '@cdktf/provider-azurerm'

dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isTerraformElement"></a>

```typescript
import { dataAzurermDnsPtrRecord } from '@cdktf/provider-azurerm'

dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isTerraformDataSource"></a>

```typescript
import { dataAzurermDnsPtrRecord } from '@cdktf/provider-azurerm'

dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.generateConfigForImport"></a>

```typescript
import { dataAzurermDnsPtrRecord } from '@cdktf/provider-azurerm'

dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermDnsPtrRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermDnsPtrRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermDnsPtrRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDnsPtrRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.records">records</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference">DataAzurermDnsPtrRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts">DataAzurermDnsPtrRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.records"></a>

```typescript
public readonly records: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDnsPtrRecordTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference">DataAzurermDnsPtrRecordTimeoutsOutputReference</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermDnsPtrRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts">DataAzurermDnsPtrRecordTimeouts</a>

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDnsPtrRecordConfig <a name="DataAzurermDnsPtrRecordConfig" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.Initializer"></a>

```typescript
import { dataAzurermDnsPtrRecord } from '@cdktf/provider-azurerm'

const dataAzurermDnsPtrRecordConfig: dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#name DataAzurermDnsPtrRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#resource_group_name DataAzurermDnsPtrRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.zoneName">zoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#zone_name DataAzurermDnsPtrRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#id DataAzurermDnsPtrRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts">DataAzurermDnsPtrRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#name DataAzurermDnsPtrRecord#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#resource_group_name DataAzurermDnsPtrRecord#resource_group_name}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#zone_name DataAzurermDnsPtrRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#id DataAzurermDnsPtrRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermDnsPtrRecordTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts">DataAzurermDnsPtrRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#timeouts DataAzurermDnsPtrRecord#timeouts}

---

### DataAzurermDnsPtrRecordTimeouts <a name="DataAzurermDnsPtrRecordTimeouts" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts.Initializer"></a>

```typescript
import { dataAzurermDnsPtrRecord } from '@cdktf/provider-azurerm'

const dataAzurermDnsPtrRecordTimeouts: dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#read DataAzurermDnsPtrRecord#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dns_ptr_record#read DataAzurermDnsPtrRecord#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDnsPtrRecordTimeoutsOutputReference <a name="DataAzurermDnsPtrRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermDnsPtrRecord } from '@cdktf/provider-azurerm'

new dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts">DataAzurermDnsPtrRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermDnsPtrRecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermDnsPtrRecord.DataAzurermDnsPtrRecordTimeouts">DataAzurermDnsPtrRecordTimeouts</a>

---



