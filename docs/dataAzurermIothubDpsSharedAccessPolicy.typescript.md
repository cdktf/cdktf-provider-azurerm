# `data_azurerm_iothub_dps_shared_access_policy`

Refer to the Terraform Registory for docs: [`data_azurerm_iothub_dps_shared_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy).

# `dataAzurermIothubDpsSharedAccessPolicy` Submodule <a name="`dataAzurermIothubDpsSharedAccessPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermIothubDpsSharedAccessPolicy <a name="DataAzurermIothubDpsSharedAccessPolicy" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy azurerm_iothub_dps_shared_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer"></a>

```typescript
import { dataAzurermIothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

new dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy(scope: Construct, id: string, config: DataAzurermIothubDpsSharedAccessPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig">DataAzurermIothubDpsSharedAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig">DataAzurermIothubDpsSharedAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermIothubDpsSharedAccessPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermIothubDpsSharedAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct"></a>

```typescript
import { dataAzurermIothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement"></a>

```typescript
import { dataAzurermIothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource"></a>

```typescript
import { dataAzurermIothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport"></a>

```typescript
import { dataAzurermIothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermIothubDpsSharedAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermIothubDpsSharedAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermIothubDpsSharedAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermIothubDpsSharedAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference">DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsNameInput">iothubDpsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsName">iothubDpsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference">DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubDpsNameInput`<sup>Optional</sup> <a name="iothubDpsNameInput" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsNameInput"></a>

```typescript
public readonly iothubDpsNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermIothubDpsSharedAccessPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iothubDpsName`<sup>Required</sup> <a name="iothubDpsName" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsName"></a>

```typescript
public readonly iothubDpsName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermIothubDpsSharedAccessPolicyConfig <a name="DataAzurermIothubDpsSharedAccessPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.Initializer"></a>

```typescript
import { dataAzurermIothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

const dataAzurermIothubDpsSharedAccessPolicyConfig: dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.iothubDpsName">iothubDpsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#iothub_dps_name DataAzurermIothubDpsSharedAccessPolicy#iothub_dps_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#name DataAzurermIothubDpsSharedAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#resource_group_name DataAzurermIothubDpsSharedAccessPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#id DataAzurermIothubDpsSharedAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iothubDpsName`<sup>Required</sup> <a name="iothubDpsName" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.iothubDpsName"></a>

```typescript
public readonly iothubDpsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#iothub_dps_name DataAzurermIothubDpsSharedAccessPolicy#iothub_dps_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#name DataAzurermIothubDpsSharedAccessPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#resource_group_name DataAzurermIothubDpsSharedAccessPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#id DataAzurermIothubDpsSharedAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermIothubDpsSharedAccessPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#timeouts DataAzurermIothubDpsSharedAccessPolicy#timeouts}

---

### DataAzurermIothubDpsSharedAccessPolicyTimeouts <a name="DataAzurermIothubDpsSharedAccessPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.Initializer"></a>

```typescript
import { dataAzurermIothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

const dataAzurermIothubDpsSharedAccessPolicyTimeouts: dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#read DataAzurermIothubDpsSharedAccessPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/data-sources/iothub_dps_shared_access_policy#read DataAzurermIothubDpsSharedAccessPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference <a name="DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermIothubDpsSharedAccessPolicy } from '@cdktf/provider-azurerm'

new dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermIothubDpsSharedAccessPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>

---



