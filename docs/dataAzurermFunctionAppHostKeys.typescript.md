# `data_azurerm_function_app_host_keys`

Refer to the Terraform Registory for docs: [`data_azurerm_function_app_host_keys`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys).

# `dataAzurermFunctionAppHostKeys` Submodule <a name="`dataAzurermFunctionAppHostKeys` Submodule" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermFunctionAppHostKeys <a name="DataAzurermFunctionAppHostKeys" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys azurerm_function_app_host_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer"></a>

```typescript
import { dataAzurermFunctionAppHostKeys } from '@cdktf/provider-azurerm'

new dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys(scope: Construct, id: string, config: DataAzurermFunctionAppHostKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig">DataAzurermFunctionAppHostKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig">DataAzurermFunctionAppHostKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermFunctionAppHostKeysTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct"></a>

```typescript
import { dataAzurermFunctionAppHostKeys } from '@cdktf/provider-azurerm'

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement"></a>

```typescript
import { dataAzurermFunctionAppHostKeys } from '@cdktf/provider-azurerm'

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource"></a>

```typescript
import { dataAzurermFunctionAppHostKeys } from '@cdktf/provider-azurerm'

dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.blobsExtensionKey">blobsExtensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.defaultFunctionKey">defaultFunctionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.durabletaskExtensionKey">durabletaskExtensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.eventGridExtensionConfigKey">eventGridExtensionConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.signalrExtensionKey">signalrExtensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference">DataAzurermFunctionAppHostKeysTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.webpubsubExtensionKey">webpubsubExtensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `blobsExtensionKey`<sup>Required</sup> <a name="blobsExtensionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.blobsExtensionKey"></a>

```typescript
public readonly blobsExtensionKey: string;
```

- *Type:* string

---

##### `defaultFunctionKey`<sup>Required</sup> <a name="defaultFunctionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.defaultFunctionKey"></a>

```typescript
public readonly defaultFunctionKey: string;
```

- *Type:* string

---

##### `durabletaskExtensionKey`<sup>Required</sup> <a name="durabletaskExtensionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.durabletaskExtensionKey"></a>

```typescript
public readonly durabletaskExtensionKey: string;
```

- *Type:* string

---

##### `eventGridExtensionConfigKey`<sup>Required</sup> <a name="eventGridExtensionConfigKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.eventGridExtensionConfigKey"></a>

```typescript
public readonly eventGridExtensionConfigKey: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `signalrExtensionKey`<sup>Required</sup> <a name="signalrExtensionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.signalrExtensionKey"></a>

```typescript
public readonly signalrExtensionKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermFunctionAppHostKeysTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference">DataAzurermFunctionAppHostKeysTimeoutsOutputReference</a>

---

##### `webpubsubExtensionKey`<sup>Required</sup> <a name="webpubsubExtensionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.webpubsubExtensionKey"></a>

```typescript
public readonly webpubsubExtensionKey: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermFunctionAppHostKeysTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermFunctionAppHostKeysConfig <a name="DataAzurermFunctionAppHostKeysConfig" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.Initializer"></a>

```typescript
import { dataAzurermFunctionAppHostKeys } from '@cdktf/provider-azurerm'

const dataAzurermFunctionAppHostKeysConfig: dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#name DataAzurermFunctionAppHostKeys#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#id DataAzurermFunctionAppHostKeys#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#name DataAzurermFunctionAppHostKeys#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#id DataAzurermFunctionAppHostKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermFunctionAppHostKeysTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#timeouts DataAzurermFunctionAppHostKeys#timeouts}

---

### DataAzurermFunctionAppHostKeysTimeouts <a name="DataAzurermFunctionAppHostKeysTimeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.Initializer"></a>

```typescript
import { dataAzurermFunctionAppHostKeys } from '@cdktf/provider-azurerm'

const dataAzurermFunctionAppHostKeysTimeouts: dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#read DataAzurermFunctionAppHostKeys#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/function_app_host_keys#read DataAzurermFunctionAppHostKeys#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermFunctionAppHostKeysTimeoutsOutputReference <a name="DataAzurermFunctionAppHostKeysTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermFunctionAppHostKeys } from '@cdktf/provider-azurerm'

new dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermFunctionAppHostKeysTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>

---



