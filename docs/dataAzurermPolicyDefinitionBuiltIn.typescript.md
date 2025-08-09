# `dataAzurermPolicyDefinitionBuiltIn` Submodule <a name="`dataAzurermPolicyDefinitionBuiltIn` Submodule" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPolicyDefinitionBuiltIn <a name="DataAzurermPolicyDefinitionBuiltIn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in azurerm_policy_definition_built_in}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer"></a>

```typescript
import { dataAzurermPolicyDefinitionBuiltIn } from '@cdktf/provider-azurerm'

new dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn(scope: Construct, id: string, config?: DataAzurermPolicyDefinitionBuiltInConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig">DataAzurermPolicyDefinitionBuiltInConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig">DataAzurermPolicyDefinitionBuiltInConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetManagementGroupName">resetManagementGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPolicyDefinitionBuiltInTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagementGroupName` <a name="resetManagementGroupName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetManagementGroupName"></a>

```typescript
public resetManagementGroupName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPolicyDefinitionBuiltIn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct"></a>

```typescript
import { dataAzurermPolicyDefinitionBuiltIn } from '@cdktf/provider-azurerm'

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement"></a>

```typescript
import { dataAzurermPolicyDefinitionBuiltIn } from '@cdktf/provider-azurerm'

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource"></a>

```typescript
import { dataAzurermPolicyDefinitionBuiltIn } from '@cdktf/provider-azurerm'

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport"></a>

```typescript
import { dataAzurermPolicyDefinitionBuiltIn } from '@cdktf/provider-azurerm'

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermPolicyDefinitionBuiltIn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPolicyDefinitionBuiltIn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPolicyDefinitionBuiltIn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPolicyDefinitionBuiltIn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyRule">policyRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.roleDefinitionIds">roleDefinitionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference">DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupNameInput">managementGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupName">managementGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `policyRule`<sup>Required</sup> <a name="policyRule" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyRule"></a>

```typescript
public readonly policyRule: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `roleDefinitionIds`<sup>Required</sup> <a name="roleDefinitionIds" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.roleDefinitionIds"></a>

```typescript
public readonly roleDefinitionIds: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference">DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementGroupNameInput`<sup>Optional</sup> <a name="managementGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupNameInput"></a>

```typescript
public readonly managementGroupNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPolicyDefinitionBuiltInTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementGroupName`<sup>Required</sup> <a name="managementGroupName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupName"></a>

```typescript
public readonly managementGroupName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPolicyDefinitionBuiltInConfig <a name="DataAzurermPolicyDefinitionBuiltInConfig" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.Initializer"></a>

```typescript
import { dataAzurermPolicyDefinitionBuiltIn } from '@cdktf/provider-azurerm'

const dataAzurermPolicyDefinitionBuiltInConfig: dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#display_name DataAzurermPolicyDefinitionBuiltIn#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#id DataAzurermPolicyDefinitionBuiltIn#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.managementGroupName">managementGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#management_group_name DataAzurermPolicyDefinitionBuiltIn#management_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#name DataAzurermPolicyDefinitionBuiltIn#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#display_name DataAzurermPolicyDefinitionBuiltIn#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#id DataAzurermPolicyDefinitionBuiltIn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementGroupName`<sup>Optional</sup> <a name="managementGroupName" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.managementGroupName"></a>

```typescript
public readonly managementGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#management_group_name DataAzurermPolicyDefinitionBuiltIn#management_group_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#name DataAzurermPolicyDefinitionBuiltIn#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPolicyDefinitionBuiltInTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#timeouts DataAzurermPolicyDefinitionBuiltIn#timeouts}

---

### DataAzurermPolicyDefinitionBuiltInTimeouts <a name="DataAzurermPolicyDefinitionBuiltInTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.Initializer"></a>

```typescript
import { dataAzurermPolicyDefinitionBuiltIn } from '@cdktf/provider-azurerm'

const dataAzurermPolicyDefinitionBuiltInTimeouts: dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#read DataAzurermPolicyDefinitionBuiltIn#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/policy_definition_built_in#read DataAzurermPolicyDefinitionBuiltIn#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference <a name="DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPolicyDefinitionBuiltIn } from '@cdktf/provider-azurerm'

new dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPolicyDefinitionBuiltInTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>

---



