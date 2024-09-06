# `dataFactoryDatasetDelimitedText` Submodule <a name="`dataFactoryDatasetDelimitedText` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetDelimitedText <a name="DataFactoryDatasetDelimitedText" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text azurerm_data_factory_dataset_delimited_text}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

new dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText(scope: Construct, id: string, config: DataFactoryDatasetDelimitedTextConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig">DataFactoryDatasetDelimitedTextConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig">DataFactoryDatasetDelimitedTextConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation">putAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation">putAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation">putHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn">putSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobFsLocation">resetAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobStorageLocation">resetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetColumnDelimiter">resetColumnDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionCodec">resetCompressionCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionLevel">resetCompressionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEscapeCharacter">resetEscapeCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFirstRowAsHeader">resetFirstRowAsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetHttpServerLocation">resetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetNullValue">resetNullValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetQuoteCharacter">resetQuoteCharacter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetRowDelimiter">resetRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetSchemaColumn">resetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureBlobFsLocation` <a name="putAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation"></a>

```typescript
public putAzureBlobFsLocation(value: DataFactoryDatasetDelimitedTextAzureBlobFsLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

---

##### `putAzureBlobStorageLocation` <a name="putAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation"></a>

```typescript
public putAzureBlobStorageLocation(value: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

---

##### `putHttpServerLocation` <a name="putHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation"></a>

```typescript
public putHttpServerLocation(value: DataFactoryDatasetDelimitedTextHttpServerLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

---

##### `putSchemaColumn` <a name="putSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn"></a>

```typescript
public putSchemaColumn(value: IResolvable | DataFactoryDatasetDelimitedTextSchemaColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryDatasetDelimitedTextTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAzureBlobFsLocation` <a name="resetAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobFsLocation"></a>

```typescript
public resetAzureBlobFsLocation(): void
```

##### `resetAzureBlobStorageLocation` <a name="resetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobStorageLocation"></a>

```typescript
public resetAzureBlobStorageLocation(): void
```

##### `resetColumnDelimiter` <a name="resetColumnDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetColumnDelimiter"></a>

```typescript
public resetColumnDelimiter(): void
```

##### `resetCompressionCodec` <a name="resetCompressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionCodec"></a>

```typescript
public resetCompressionCodec(): void
```

##### `resetCompressionLevel` <a name="resetCompressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionLevel"></a>

```typescript
public resetCompressionLevel(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetEscapeCharacter` <a name="resetEscapeCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEscapeCharacter"></a>

```typescript
public resetEscapeCharacter(): void
```

##### `resetFirstRowAsHeader` <a name="resetFirstRowAsHeader" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFirstRowAsHeader"></a>

```typescript
public resetFirstRowAsHeader(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetHttpServerLocation` <a name="resetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetHttpServerLocation"></a>

```typescript
public resetHttpServerLocation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNullValue` <a name="resetNullValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetNullValue"></a>

```typescript
public resetNullValue(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetQuoteCharacter` <a name="resetQuoteCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetQuoteCharacter"></a>

```typescript
public resetQuoteCharacter(): void
```

##### `resetRowDelimiter` <a name="resetRowDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetRowDelimiter"></a>

```typescript
public resetRowDelimiter(): void
```

##### `resetSchemaColumn` <a name="resetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetSchemaColumn"></a>

```typescript
public resetSchemaColumn(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryDatasetDelimitedText resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryDatasetDelimitedText resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryDatasetDelimitedText to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryDatasetDelimitedText that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetDelimitedText to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocation">azureBlobFsLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocation">azureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocation">httpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference">DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumn">schemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList">DataFactoryDatasetDelimitedTextSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference">DataFactoryDatasetDelimitedTextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocationInput">azureBlobFsLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocationInput">azureBlobStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiterInput">columnDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodecInput">compressionCodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevelInput">compressionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacterInput">escapeCharacterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeaderInput">firstRowAsHeaderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocationInput">httpServerLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValueInput">nullValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacterInput">quoteCharacterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiterInput">rowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumnInput">schemaColumnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiter">columnDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodec">compressionCodec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevel">compressionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacter">escapeCharacter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeader">firstRowAsHeader</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValue">nullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacter">quoteCharacter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiter">rowDelimiter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureBlobFsLocation`<sup>Required</sup> <a name="azureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocation"></a>

```typescript
public readonly azureBlobFsLocation: DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference</a>

---

##### `azureBlobStorageLocation`<sup>Required</sup> <a name="azureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocation"></a>

```typescript
public readonly azureBlobStorageLocation: DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference</a>

---

##### `httpServerLocation`<sup>Required</sup> <a name="httpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocation"></a>

```typescript
public readonly httpServerLocation: DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference">DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference</a>

---

##### `schemaColumn`<sup>Required</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumn"></a>

```typescript
public readonly schemaColumn: DataFactoryDatasetDelimitedTextSchemaColumnList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList">DataFactoryDatasetDelimitedTextSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryDatasetDelimitedTextTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference">DataFactoryDatasetDelimitedTextTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `azureBlobFsLocationInput`<sup>Optional</sup> <a name="azureBlobFsLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocationInput"></a>

```typescript
public readonly azureBlobFsLocationInput: DataFactoryDatasetDelimitedTextAzureBlobFsLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

---

##### `azureBlobStorageLocationInput`<sup>Optional</sup> <a name="azureBlobStorageLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocationInput"></a>

```typescript
public readonly azureBlobStorageLocationInput: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

---

##### `columnDelimiterInput`<sup>Optional</sup> <a name="columnDelimiterInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiterInput"></a>

```typescript
public readonly columnDelimiterInput: string;
```

- *Type:* string

---

##### `compressionCodecInput`<sup>Optional</sup> <a name="compressionCodecInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodecInput"></a>

```typescript
public readonly compressionCodecInput: string;
```

- *Type:* string

---

##### `compressionLevelInput`<sup>Optional</sup> <a name="compressionLevelInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevelInput"></a>

```typescript
public readonly compressionLevelInput: string;
```

- *Type:* string

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `escapeCharacterInput`<sup>Optional</sup> <a name="escapeCharacterInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacterInput"></a>

```typescript
public readonly escapeCharacterInput: string;
```

- *Type:* string

---

##### `firstRowAsHeaderInput`<sup>Optional</sup> <a name="firstRowAsHeaderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeaderInput"></a>

```typescript
public readonly firstRowAsHeaderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `httpServerLocationInput`<sup>Optional</sup> <a name="httpServerLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocationInput"></a>

```typescript
public readonly httpServerLocationInput: DataFactoryDatasetDelimitedTextHttpServerLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nullValueInput`<sup>Optional</sup> <a name="nullValueInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValueInput"></a>

```typescript
public readonly nullValueInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `quoteCharacterInput`<sup>Optional</sup> <a name="quoteCharacterInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacterInput"></a>

```typescript
public readonly quoteCharacterInput: string;
```

- *Type:* string

---

##### `rowDelimiterInput`<sup>Optional</sup> <a name="rowDelimiterInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiterInput"></a>

```typescript
public readonly rowDelimiterInput: string;
```

- *Type:* string

---

##### `schemaColumnInput`<sup>Optional</sup> <a name="schemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumnInput"></a>

```typescript
public readonly schemaColumnInput: IResolvable | DataFactoryDatasetDelimitedTextSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryDatasetDelimitedTextTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `columnDelimiter`<sup>Required</sup> <a name="columnDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiter"></a>

```typescript
public readonly columnDelimiter: string;
```

- *Type:* string

---

##### `compressionCodec`<sup>Required</sup> <a name="compressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodec"></a>

```typescript
public readonly compressionCodec: string;
```

- *Type:* string

---

##### `compressionLevel`<sup>Required</sup> <a name="compressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevel"></a>

```typescript
public readonly compressionLevel: string;
```

- *Type:* string

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `escapeCharacter`<sup>Required</sup> <a name="escapeCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacter"></a>

```typescript
public readonly escapeCharacter: string;
```

- *Type:* string

---

##### `firstRowAsHeader`<sup>Required</sup> <a name="firstRowAsHeader" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeader"></a>

```typescript
public readonly firstRowAsHeader: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nullValue`<sup>Required</sup> <a name="nullValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValue"></a>

```typescript
public readonly nullValue: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `quoteCharacter`<sup>Required</sup> <a name="quoteCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacter"></a>

```typescript
public readonly quoteCharacter: string;
```

- *Type:* string

---

##### `rowDelimiter`<sup>Required</sup> <a name="rowDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiter"></a>

```typescript
public readonly rowDelimiter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetDelimitedTextAzureBlobFsLocation <a name="DataFactoryDatasetDelimitedTextAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

const dataFactoryDatasetDelimitedTextAzureBlobFsLocation: dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFileSystemEnabled">dynamicFileSystemEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_file_system_enabled DataFactoryDatasetDelimitedText#dynamic_file_system_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.fileSystem">fileSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#file_system DataFactoryDatasetDelimitedText#file_system}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |

---

##### `dynamicFilenameEnabled`<sup>Optional</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `dynamicFileSystemEnabled`<sup>Optional</sup> <a name="dynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFileSystemEnabled"></a>

```typescript
public readonly dynamicFileSystemEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_file_system_enabled DataFactoryDatasetDelimitedText#dynamic_file_system_enabled}.

---

##### `dynamicPathEnabled`<sup>Optional</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `fileSystem`<sup>Optional</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.fileSystem"></a>

```typescript
public readonly fileSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#file_system DataFactoryDatasetDelimitedText#file_system}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

### DataFactoryDatasetDelimitedTextAzureBlobStorageLocation <a name="DataFactoryDatasetDelimitedTextAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

const dataFactoryDatasetDelimitedTextAzureBlobStorageLocation: dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.container">container</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#container DataFactoryDatasetDelimitedText#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicContainerEnabled">dynamicContainerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_container_enabled DataFactoryDatasetDelimitedText#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#container DataFactoryDatasetDelimitedText#container}.

---

##### `dynamicContainerEnabled`<sup>Optional</sup> <a name="dynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```typescript
public readonly dynamicContainerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_container_enabled DataFactoryDatasetDelimitedText#dynamic_container_enabled}.

---

##### `dynamicFilenameEnabled`<sup>Optional</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `dynamicPathEnabled`<sup>Optional</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

### DataFactoryDatasetDelimitedTextConfig <a name="DataFactoryDatasetDelimitedTextConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

const dataFactoryDatasetDelimitedTextConfig: dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#data_factory_id DataFactoryDatasetDelimitedText#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#additional_properties DataFactoryDatasetDelimitedText#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#annotations DataFactoryDatasetDelimitedText#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobFsLocation">azureBlobFsLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | azure_blob_fs_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobStorageLocation">azureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.columnDelimiter">columnDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionCodec">compressionCodec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#compression_codec DataFactoryDatasetDelimitedText#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionLevel">compressionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#compression_level DataFactoryDatasetDelimitedText#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.encoding">encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#encoding DataFactoryDatasetDelimitedText#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.escapeCharacter">escapeCharacter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#escape_character DataFactoryDatasetDelimitedText#escape_character}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.firstRowAsHeader">firstRowAsHeader</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.folder">folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#folder DataFactoryDatasetDelimitedText#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.httpServerLocation">httpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#id DataFactoryDatasetDelimitedText#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.nullValue">nullValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#null_value DataFactoryDatasetDelimitedText#null_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#parameters DataFactoryDatasetDelimitedText#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.quoteCharacter">quoteCharacter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#quote_character DataFactoryDatasetDelimitedText#quote_character}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.rowDelimiter">rowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.schemaColumn">schemaColumn</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>[]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#data_factory_id DataFactoryDatasetDelimitedText#data_factory_id}.

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#additional_properties DataFactoryDatasetDelimitedText#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#annotations DataFactoryDatasetDelimitedText#annotations}.

---

##### `azureBlobFsLocation`<sup>Optional</sup> <a name="azureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobFsLocation"></a>

```typescript
public readonly azureBlobFsLocation: DataFactoryDatasetDelimitedTextAzureBlobFsLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

azure_blob_fs_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#azure_blob_fs_location DataFactoryDatasetDelimitedText#azure_blob_fs_location}

---

##### `azureBlobStorageLocation`<sup>Optional</sup> <a name="azureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobStorageLocation"></a>

```typescript
public readonly azureBlobStorageLocation: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#azure_blob_storage_location DataFactoryDatasetDelimitedText#azure_blob_storage_location}

---

##### `columnDelimiter`<sup>Optional</sup> <a name="columnDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.columnDelimiter"></a>

```typescript
public readonly columnDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}.

---

##### `compressionCodec`<sup>Optional</sup> <a name="compressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionCodec"></a>

```typescript
public readonly compressionCodec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#compression_codec DataFactoryDatasetDelimitedText#compression_codec}.

---

##### `compressionLevel`<sup>Optional</sup> <a name="compressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionLevel"></a>

```typescript
public readonly compressionLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#compression_level DataFactoryDatasetDelimitedText#compression_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#encoding DataFactoryDatasetDelimitedText#encoding}.

---

##### `escapeCharacter`<sup>Optional</sup> <a name="escapeCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.escapeCharacter"></a>

```typescript
public readonly escapeCharacter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#escape_character DataFactoryDatasetDelimitedText#escape_character}.

---

##### `firstRowAsHeader`<sup>Optional</sup> <a name="firstRowAsHeader" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.firstRowAsHeader"></a>

```typescript
public readonly firstRowAsHeader: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#folder DataFactoryDatasetDelimitedText#folder}.

---

##### `httpServerLocation`<sup>Optional</sup> <a name="httpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.httpServerLocation"></a>

```typescript
public readonly httpServerLocation: DataFactoryDatasetDelimitedTextHttpServerLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#http_server_location DataFactoryDatasetDelimitedText#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#id DataFactoryDatasetDelimitedText#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nullValue`<sup>Optional</sup> <a name="nullValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.nullValue"></a>

```typescript
public readonly nullValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#null_value DataFactoryDatasetDelimitedText#null_value}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#parameters DataFactoryDatasetDelimitedText#parameters}.

---

##### `quoteCharacter`<sup>Optional</sup> <a name="quoteCharacter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.quoteCharacter"></a>

```typescript
public readonly quoteCharacter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#quote_character DataFactoryDatasetDelimitedText#quote_character}.

---

##### `rowDelimiter`<sup>Optional</sup> <a name="rowDelimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.rowDelimiter"></a>

```typescript
public readonly rowDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.schemaColumn"></a>

```typescript
public readonly schemaColumn: IResolvable | DataFactoryDatasetDelimitedTextSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>[]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#schema_column DataFactoryDatasetDelimitedText#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryDatasetDelimitedTextTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#timeouts DataFactoryDatasetDelimitedText#timeouts}

---

### DataFactoryDatasetDelimitedTextHttpServerLocation <a name="DataFactoryDatasetDelimitedTextHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

const dataFactoryDatasetDelimitedTextHttpServerLocation: dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.relativeUrl">relativeUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#relative_url DataFactoryDatasetDelimitedText#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

##### `relativeUrl`<sup>Required</sup> <a name="relativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.relativeUrl"></a>

```typescript
public readonly relativeUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#relative_url DataFactoryDatasetDelimitedText#relative_url}.

---

##### `dynamicFilenameEnabled`<sup>Optional</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `dynamicPathEnabled`<sup>Optional</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

### DataFactoryDatasetDelimitedTextSchemaColumn <a name="DataFactoryDatasetDelimitedTextSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

const dataFactoryDatasetDelimitedTextSchemaColumn: dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#type DataFactoryDatasetDelimitedText#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#type DataFactoryDatasetDelimitedText#type}.

---

### DataFactoryDatasetDelimitedTextTimeouts <a name="DataFactoryDatasetDelimitedTextTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

const dataFactoryDatasetDelimitedTextTimeouts: dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#create DataFactoryDatasetDelimitedText#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#delete DataFactoryDatasetDelimitedText#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#read DataFactoryDatasetDelimitedText#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#update DataFactoryDatasetDelimitedText#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#create DataFactoryDatasetDelimitedText#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#delete DataFactoryDatasetDelimitedText#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#read DataFactoryDatasetDelimitedText#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/data_factory_dataset_delimited_text#update DataFactoryDatasetDelimitedText#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference <a name="DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

new dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFilenameEnabled">resetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFileSystemEnabled">resetDynamicFileSystemEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicPathEnabled">resetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFileSystem">resetFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicFilenameEnabled` <a name="resetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFilenameEnabled"></a>

```typescript
public resetDynamicFilenameEnabled(): void
```

##### `resetDynamicFileSystemEnabled` <a name="resetDynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFileSystemEnabled"></a>

```typescript
public resetDynamicFileSystemEnabled(): void
```

##### `resetDynamicPathEnabled` <a name="resetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicPathEnabled"></a>

```typescript
public resetDynamicPathEnabled(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetFileSystem` <a name="resetFileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFileSystem"></a>

```typescript
public resetFileSystem(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabledInput">dynamicFilenameEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabledInput">dynamicFileSystemEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabledInput">dynamicPathEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystemInput">fileSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabled">dynamicFileSystemEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystem">fileSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicFilenameEnabledInput`<sup>Optional</sup> <a name="dynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```typescript
public readonly dynamicFilenameEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicFileSystemEnabledInput`<sup>Optional</sup> <a name="dynamicFileSystemEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabledInput"></a>

```typescript
public readonly dynamicFileSystemEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabledInput`<sup>Optional</sup> <a name="dynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabledInput"></a>

```typescript
public readonly dynamicPathEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `fileSystemInput`<sup>Optional</sup> <a name="fileSystemInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystemInput"></a>

```typescript
public readonly fileSystemInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `dynamicFilenameEnabled`<sup>Required</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicFileSystemEnabled`<sup>Required</sup> <a name="dynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabled"></a>

```typescript
public readonly dynamicFileSystemEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabled`<sup>Required</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystem"></a>

```typescript
public readonly fileSystem: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryDatasetDelimitedTextAzureBlobFsLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

---


### DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

new dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">resetDynamicContainerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">resetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">resetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicContainerEnabled` <a name="resetDynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```typescript
public resetDynamicContainerEnabled(): void
```

##### `resetDynamicFilenameEnabled` <a name="resetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```typescript
public resetDynamicFilenameEnabled(): void
```

##### `resetDynamicPathEnabled` <a name="resetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```typescript
public resetDynamicPathEnabled(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">dynamicContainerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">dynamicFilenameEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">dynamicPathEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">dynamicContainerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `dynamicContainerEnabledInput`<sup>Optional</sup> <a name="dynamicContainerEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```typescript
public readonly dynamicContainerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicFilenameEnabledInput`<sup>Optional</sup> <a name="dynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```typescript
public readonly dynamicFilenameEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabledInput`<sup>Optional</sup> <a name="dynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```typescript
public readonly dynamicPathEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `dynamicContainerEnabled`<sup>Required</sup> <a name="dynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```typescript
public readonly dynamicContainerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicFilenameEnabled`<sup>Required</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabled`<sup>Required</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

---


### DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference <a name="DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

new dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicFilenameEnabled">resetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicPathEnabled">resetDynamicPathEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicFilenameEnabled` <a name="resetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```typescript
public resetDynamicFilenameEnabled(): void
```

##### `resetDynamicPathEnabled` <a name="resetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```typescript
public resetDynamicPathEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">dynamicFilenameEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabledInput">dynamicPathEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrlInput">relativeUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrl">relativeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicFilenameEnabledInput`<sup>Optional</sup> <a name="dynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```typescript
public readonly dynamicFilenameEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabledInput`<sup>Optional</sup> <a name="dynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```typescript
public readonly dynamicPathEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `relativeUrlInput`<sup>Optional</sup> <a name="relativeUrlInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```typescript
public readonly relativeUrlInput: string;
```

- *Type:* string

---

##### `dynamicFilenameEnabled`<sup>Required</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```typescript
public readonly dynamicFilenameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicPathEnabled`<sup>Required</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```typescript
public readonly dynamicPathEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `relativeUrl`<sup>Required</sup> <a name="relativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrl"></a>

```typescript
public readonly relativeUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryDatasetDelimitedTextHttpServerLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

---


### DataFactoryDatasetDelimitedTextSchemaColumnList <a name="DataFactoryDatasetDelimitedTextSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

new dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get"></a>

```typescript
public get(index: number): DataFactoryDatasetDelimitedTextSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetDelimitedTextSchemaColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>[]

---


### DataFactoryDatasetDelimitedTextSchemaColumnOutputReference <a name="DataFactoryDatasetDelimitedTextSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

new dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetDelimitedTextSchemaColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>

---


### DataFactoryDatasetDelimitedTextTimeoutsOutputReference <a name="DataFactoryDatasetDelimitedTextTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryDatasetDelimitedText } from '@cdktf/provider-azurerm'

new dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryDatasetDelimitedTextTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>

---



