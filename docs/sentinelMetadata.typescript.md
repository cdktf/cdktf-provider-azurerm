# `azurerm_sentinel_metadata`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_metadata`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata).

# `sentinelMetadata` Submodule <a name="`sentinelMetadata` Submodule" id="@cdktf/provider-azurerm.sentinelMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelMetadata <a name="SentinelMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata azurerm_sentinel_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

new sentinelMetadata.SentinelMetadata(scope: Construct, id: string, config: SentinelMetadataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig">SentinelMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig">SentinelMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor">putAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory">putCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport">putSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetAuthor">resetAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetContentSchemaVersion">resetContentSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCustomVersion">resetCustomVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetDependency">resetDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetFirstPublishDate">resetFirstPublishDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetIconId">resetIconId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetLastPublishDate">resetLastPublishDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImages">resetPreviewImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImagesDark">resetPreviewImagesDark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetProviders">resetProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSupport">resetSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTactics">resetThreatAnalysisTactics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTechniques">resetThreatAnalysisTechniques</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthor` <a name="putAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor"></a>

```typescript
public putAuthor(value: SentinelMetadataAuthor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---

##### `putCategory` <a name="putCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory"></a>

```typescript
public putCategory(value: SentinelMetadataCategory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource"></a>

```typescript
public putSource(value: SentinelMetadataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---

##### `putSupport` <a name="putSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport"></a>

```typescript
public putSupport(value: SentinelMetadataSupport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelMetadataTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

---

##### `resetAuthor` <a name="resetAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetAuthor"></a>

```typescript
public resetAuthor(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetContentSchemaVersion` <a name="resetContentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetContentSchemaVersion"></a>

```typescript
public resetContentSchemaVersion(): void
```

##### `resetCustomVersion` <a name="resetCustomVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCustomVersion"></a>

```typescript
public resetCustomVersion(): void
```

##### `resetDependency` <a name="resetDependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetDependency"></a>

```typescript
public resetDependency(): void
```

##### `resetFirstPublishDate` <a name="resetFirstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetFirstPublishDate"></a>

```typescript
public resetFirstPublishDate(): void
```

##### `resetIconId` <a name="resetIconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetIconId"></a>

```typescript
public resetIconId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastPublishDate` <a name="resetLastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetLastPublishDate"></a>

```typescript
public resetLastPublishDate(): void
```

##### `resetPreviewImages` <a name="resetPreviewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImages"></a>

```typescript
public resetPreviewImages(): void
```

##### `resetPreviewImagesDark` <a name="resetPreviewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImagesDark"></a>

```typescript
public resetPreviewImagesDark(): void
```

##### `resetProviders` <a name="resetProviders" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetProviders"></a>

```typescript
public resetProviders(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSupport` <a name="resetSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSupport"></a>

```typescript
public resetSupport(): void
```

##### `resetThreatAnalysisTactics` <a name="resetThreatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTactics"></a>

```typescript
public resetThreatAnalysisTactics(): void
```

##### `resetThreatAnalysisTechniques` <a name="resetThreatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTechniques"></a>

```typescript
public resetThreatAnalysisTechniques(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

sentinelMetadata.SentinelMetadata.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

sentinelMetadata.SentinelMetadata.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

sentinelMetadata.SentinelMetadata.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.author">author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference">SentinelMetadataAuthorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.category">category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference">SentinelMetadataCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference">SentinelMetadataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference">SentinelMetadataSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference">SentinelMetadataTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.authorInput">authorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.categoryInput">categoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentIdInput">contentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersionInput">contentSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersionInput">customVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDateInput">firstPublishDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconIdInput">iconIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDateInput">lastPublishDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentIdInput">parentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDarkInput">previewImagesDarkInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesInput">previewImagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providersInput">providersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.supportInput">supportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTacticsInput">threatAnalysisTacticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniquesInput">threatAnalysisTechniquesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentId">contentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersion">contentSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersion">customVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDate">firstPublishDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconId">iconId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDate">lastPublishDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImages">previewImages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDark">previewImagesDark</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providers">providers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTactics">threatAnalysisTactics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniques">threatAnalysisTechniques</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.author"></a>

```typescript
public readonly author: SentinelMetadataAuthorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference">SentinelMetadataAuthorOutputReference</a>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.category"></a>

```typescript
public readonly category: SentinelMetadataCategoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference">SentinelMetadataCategoryOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.source"></a>

```typescript
public readonly source: SentinelMetadataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference">SentinelMetadataSourceOutputReference</a>

---

##### `support`<sup>Required</sup> <a name="support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.support"></a>

```typescript
public readonly support: SentinelMetadataSupportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference">SentinelMetadataSupportOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelMetadataTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference">SentinelMetadataTimeoutsOutputReference</a>

---

##### `authorInput`<sup>Optional</sup> <a name="authorInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.authorInput"></a>

```typescript
public readonly authorInput: SentinelMetadataAuthor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.categoryInput"></a>

```typescript
public readonly categoryInput: SentinelMetadataCategory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---

##### `contentIdInput`<sup>Optional</sup> <a name="contentIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentIdInput"></a>

```typescript
public readonly contentIdInput: string;
```

- *Type:* string

---

##### `contentSchemaVersionInput`<sup>Optional</sup> <a name="contentSchemaVersionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersionInput"></a>

```typescript
public readonly contentSchemaVersionInput: string;
```

- *Type:* string

---

##### `customVersionInput`<sup>Optional</sup> <a name="customVersionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersionInput"></a>

```typescript
public readonly customVersionInput: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `firstPublishDateInput`<sup>Optional</sup> <a name="firstPublishDateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDateInput"></a>

```typescript
public readonly firstPublishDateInput: string;
```

- *Type:* string

---

##### `iconIdInput`<sup>Optional</sup> <a name="iconIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconIdInput"></a>

```typescript
public readonly iconIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `lastPublishDateInput`<sup>Optional</sup> <a name="lastPublishDateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDateInput"></a>

```typescript
public readonly lastPublishDateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: string;
```

- *Type:* string

---

##### `previewImagesDarkInput`<sup>Optional</sup> <a name="previewImagesDarkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDarkInput"></a>

```typescript
public readonly previewImagesDarkInput: string[];
```

- *Type:* string[]

---

##### `previewImagesInput`<sup>Optional</sup> <a name="previewImagesInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesInput"></a>

```typescript
public readonly previewImagesInput: string[];
```

- *Type:* string[]

---

##### `providersInput`<sup>Optional</sup> <a name="providersInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providersInput"></a>

```typescript
public readonly providersInput: string[];
```

- *Type:* string[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.sourceInput"></a>

```typescript
public readonly sourceInput: SentinelMetadataSource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---

##### `supportInput`<sup>Optional</sup> <a name="supportInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.supportInput"></a>

```typescript
public readonly supportInput: SentinelMetadataSupport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---

##### `threatAnalysisTacticsInput`<sup>Optional</sup> <a name="threatAnalysisTacticsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTacticsInput"></a>

```typescript
public readonly threatAnalysisTacticsInput: string[];
```

- *Type:* string[]

---

##### `threatAnalysisTechniquesInput`<sup>Optional</sup> <a name="threatAnalysisTechniquesInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniquesInput"></a>

```typescript
public readonly threatAnalysisTechniquesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelMetadataTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentId"></a>

```typescript
public readonly contentId: string;
```

- *Type:* string

---

##### `contentSchemaVersion`<sup>Required</sup> <a name="contentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersion"></a>

```typescript
public readonly contentSchemaVersion: string;
```

- *Type:* string

---

##### `customVersion`<sup>Required</sup> <a name="customVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersion"></a>

```typescript
public readonly customVersion: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `firstPublishDate`<sup>Required</sup> <a name="firstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDate"></a>

```typescript
public readonly firstPublishDate: string;
```

- *Type:* string

---

##### `iconId`<sup>Required</sup> <a name="iconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconId"></a>

```typescript
public readonly iconId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `lastPublishDate`<sup>Required</sup> <a name="lastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDate"></a>

```typescript
public readonly lastPublishDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `previewImages`<sup>Required</sup> <a name="previewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImages"></a>

```typescript
public readonly previewImages: string[];
```

- *Type:* string[]

---

##### `previewImagesDark`<sup>Required</sup> <a name="previewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDark"></a>

```typescript
public readonly previewImagesDark: string[];
```

- *Type:* string[]

---

##### `providers`<sup>Required</sup> <a name="providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providers"></a>

```typescript
public readonly providers: string[];
```

- *Type:* string[]

---

##### `threatAnalysisTactics`<sup>Required</sup> <a name="threatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTactics"></a>

```typescript
public readonly threatAnalysisTactics: string[];
```

- *Type:* string[]

---

##### `threatAnalysisTechniques`<sup>Required</sup> <a name="threatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniques"></a>

```typescript
public readonly threatAnalysisTechniques: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelMetadataAuthor <a name="SentinelMetadataAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

const sentinelMetadataAuthor: sentinelMetadata.SentinelMetadataAuthor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataCategory <a name="SentinelMetadataCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

const sentinelMetadataCategory: sentinelMetadata.SentinelMetadataCategory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.domains">domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.verticals">verticals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}. |

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}.

---

##### `verticals`<sup>Optional</sup> <a name="verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.verticals"></a>

```typescript
public readonly verticals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}.

---

### SentinelMetadataConfig <a name="SentinelMetadataConfig" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

const sentinelMetadataConfig: sentinelMetadata.SentinelMetadataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentId">contentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.parentId">parentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.author">author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | author block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.category">category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | category block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentSchemaVersion">contentSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.customVersion">customVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependency">dependency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.firstPublishDate">firstPublishDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.iconId">iconId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lastPublishDate">lastPublishDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImages">previewImages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImagesDark">previewImagesDark</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.providers">providers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTactics">threatAnalysisTactics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTechniques">threatAnalysisTechniques</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentId`<sup>Required</sup> <a name="contentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentId"></a>

```typescript
public readonly contentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}.

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}.

---

##### `author`<sup>Optional</sup> <a name="author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.author"></a>

```typescript
public readonly author: SentinelMetadataAuthor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

author block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#author SentinelMetadata#author}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.category"></a>

```typescript
public readonly category: SentinelMetadataCategory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#category SentinelMetadata#category}

---

##### `contentSchemaVersion`<sup>Optional</sup> <a name="contentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentSchemaVersion"></a>

```typescript
public readonly contentSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}.

---

##### `customVersion`<sup>Optional</sup> <a name="customVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.customVersion"></a>

```typescript
public readonly customVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}.

---

##### `dependency`<sup>Optional</sup> <a name="dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}.

---

##### `firstPublishDate`<sup>Optional</sup> <a name="firstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.firstPublishDate"></a>

```typescript
public readonly firstPublishDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}.

---

##### `iconId`<sup>Optional</sup> <a name="iconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.iconId"></a>

```typescript
public readonly iconId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastPublishDate`<sup>Optional</sup> <a name="lastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lastPublishDate"></a>

```typescript
public readonly lastPublishDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}.

---

##### `previewImages`<sup>Optional</sup> <a name="previewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImages"></a>

```typescript
public readonly previewImages: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}.

---

##### `previewImagesDark`<sup>Optional</sup> <a name="previewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImagesDark"></a>

```typescript
public readonly previewImagesDark: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}.

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.providers"></a>

```typescript
public readonly providers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.source"></a>

```typescript
public readonly source: SentinelMetadataSource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#source SentinelMetadata#source}

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.support"></a>

```typescript
public readonly support: SentinelMetadataSupport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#support SentinelMetadata#support}

---

##### `threatAnalysisTactics`<sup>Optional</sup> <a name="threatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTactics"></a>

```typescript
public readonly threatAnalysisTactics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}.

---

##### `threatAnalysisTechniques`<sup>Optional</sup> <a name="threatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTechniques"></a>

```typescript
public readonly threatAnalysisTechniques: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelMetadataTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#timeouts SentinelMetadata#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}.

---

### SentinelMetadataSource <a name="SentinelMetadataSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

const sentinelMetadataSource: sentinelMetadata.SentinelMetadataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataSupport <a name="SentinelMetadataSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

const sentinelMetadataSupport: sentinelMetadata.SentinelMetadataSupport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.link">link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataTimeouts <a name="SentinelMetadataTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

const sentinelMetadataTimeouts: sentinelMetadata.SentinelMetadataTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelMetadataAuthorOutputReference <a name="SentinelMetadataAuthorOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

new sentinelMetadata.SentinelMetadataAuthorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetLink` <a name="resetLink" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelMetadataAuthor;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---


### SentinelMetadataCategoryOutputReference <a name="SentinelMetadataCategoryOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

new sentinelMetadata.SentinelMetadataCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetVerticals">resetVerticals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetVerticals` <a name="resetVerticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetVerticals"></a>

```typescript
public resetVerticals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticalsInput">verticalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticals">verticals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `verticalsInput`<sup>Optional</sup> <a name="verticalsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticalsInput"></a>

```typescript
public readonly verticalsInput: string[];
```

- *Type:* string[]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `verticals`<sup>Required</sup> <a name="verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticals"></a>

```typescript
public readonly verticals: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelMetadataCategory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---


### SentinelMetadataSourceOutputReference <a name="SentinelMetadataSourceOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

new sentinelMetadata.SentinelMetadataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelMetadataSource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---


### SentinelMetadataSupportOutputReference <a name="SentinelMetadataSupportOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

new sentinelMetadata.SentinelMetadataSupportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetLink` <a name="resetLink" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetLink"></a>

```typescript
public resetLink(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.linkInput">linkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.linkInput"></a>

```typescript
public readonly linkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SentinelMetadataSupport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---


### SentinelMetadataTimeoutsOutputReference <a name="SentinelMetadataTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelMetadata } from '@cdktf/provider-azurerm'

new sentinelMetadata.SentinelMetadataTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelMetadataTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

---



